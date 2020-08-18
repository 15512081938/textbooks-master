var StepFunctions = (function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    // =============================================================================
    // Core.ts | Utility Functions
    // (c) Mathigon
    // =============================================================================
    /** Creates a random UID string of a given length. */
    function uid(n = 10) {
        return Math.random().toString(36).substr(2, n);
    }
    /** Checks if x is strictly equal to any one of the following arguments. */
    function isOneOf(x, ...values) {
        return values.includes(x);
    }
    /** Applies default keys to an object. */
    function applyDefaults(obj, defaults) {
        for (let key of Object.keys(defaults)) {
            if (!obj.hasOwnProperty(key))
                obj[key] = defaults[key];
        }
        return obj;
    }
    const defaultMerge = ((a, b) => a.concat(b));
    /** Deep extends obj1 with obj2, using a custom array merge function. */
    function deepExtend(obj1, obj2, arrayMergeFn = defaultMerge) {
        for (const i of Object.keys(obj2)) {
            if (i in obj1 && Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
                obj1[i] = arrayMergeFn(obj1[i], obj2[i]);
            }
            else if (i in obj1 && obj1[i] instanceof Object &&
                obj2[i] instanceof Object) {
                deepExtend(obj1[i], obj2[i]);
            }
            else {
                obj1[i] = obj2[i];
            }
        }
    }
    /** Replacement for setTimeout() that is synchronous for time 0. */
    function delay(fn, t = 0) {
        if (t) {
            return +setTimeout(fn, t);
        }
        else {
            fn();
            return 0;
        }
    }
    /** Creates a new promise together with functions to resolve or reject. */
    function defer() {
        let resolve = (arg) => { };
        let reject = (arg) => { };
        const promise = new Promise((_resolve, _reject) => {
            resolve = _resolve;
            reject = _reject;
        });
        // This prevents exceptions when promises without .catch are rejected:
        promise.catch((error) => error);
        return { promise, resolve, reject };
    }
    /**
     * Function wrapper that modifies a function to cache its return values. This
     * is useful for performance intensive functions which are called repeatedly
     * with the same arguments. However it can reduce performance for functions
     * which are always called with different arguments. Note that argument
     * comparison doesn't not work with Objects or nested arrays.
     */
    function cache(fn) {
        let cached = new Map();
        return function (...args) {
            let argString = args.join('--');
            if (!cached.has(argString))
                cached.set(argString, fn(...args));
            return cached.get(argString);
        };
    }
    /**
     * Function wrapper that prevents a function from being executed more than once
     * every t ms. This is particularly useful for optimising callbacks for
     * continues events like scroll, resize or slider move. Setting `forceDelay`
     * to `true` means that even the first function call is after the minimum
     * timout, rather than instantly.
     */
    function throttle(fn, t = 0, forceDelay = false) {
        let delay = false;
        let repeat = false;
        return (...args) => {
            if (delay) {
                repeat = true;
            }
            else {
                if (forceDelay) {
                    repeat = true;
                }
                else {
                    fn(...args);
                }
                delay = true;
                setTimeout(() => {
                    if (repeat)
                        fn(...args);
                    delay = repeat = false;
                }, t);
            }
        };
    }
    /** Safe wrapper for JSON.parse. */
    function safeToJSON(str, fallback = {}) {
        if (!str)
            return fallback;
        try {
            return JSON.parse(str) || fallback;
        }
        catch (e) {
            return fallback;
        }
    }
    //# sourceMappingURL=utilities.js.map

    // =============================================================================
    // Core.ts | Array Functions
    // (c) Mathigon
    // =============================================================================
    /** Creates an array of size `n`, containing `value` at every entry. */
    function repeat(value, n) {
        return new Array(n).fill(value);
    }
    /** Creates a matrix of size `x` by `y`, containing `value` at every entry. */
    function repeat2D(value, x, y) {
        const result = [];
        for (let i = 0; i < x; ++i) {
            result.push(repeat(value, y));
        }
        return result;
    }
    /** Creates an array of size `n`, with the result of `fn(i)` at position i. */
    function tabulate(fn, n) {
        const result = [];
        for (let i = 0; i < n; ++i) {
            result.push(fn(i));
        }
        return result;
    }
    /**
     * Creates a matrix of size `x` by `y`, with the result of `fn(i, j)` at
     * position (i, j.
     */
    function tabulate2D(fn, x, y) {
        const result = [];
        for (let i = 0; i < x; ++i) {
            const row = [];
            for (let j = 0; j < y; ++j) {
                row.push(fn(i, j));
            }
            result.push(row);
        }
        return result;
    }
    /** Creates an array of numbers from 0 to a, or from a to b. */
    function list(a, b, step = 1) {
        const arr = [];
        if (b === undefined && a >= 0) {
            for (let i = 0; i < a; i += step)
                arr.push(i);
        }
        else if (b === undefined) {
            for (let i = 0; i > a; i -= step)
                arr.push(i);
        }
        else if (a <= b) {
            for (let i = a; i <= b; i += step)
                arr.push(i);
        }
        else {
            for (let i = a; i >= b; i -= step)
                arr.push(i);
        }
        return arr;
    }
    /** Returns the last item in an array, or the ith item from the end. */
    function last(array, i = 0) {
        return array[array.length - 1 - i];
    }
    /** Finds the sum of all elements in an numeric array. */
    function total(array) {
        return array.reduce((t, v) => t + v, 0);
    }
    /** Sorts an array by the return value when evaluating a given function. */
    function sortBy(array, fn, reverse = false) {
        return array.slice(0).sort((a, b) => {
            const x = fn(a);
            const y = fn(b);
            return x < y ? (reverse ? 1 : -1) : x > y ? (reverse ? -1 : 1) : 0;
        });
    }
    /** Filters all duplicate elements from an array. */
    function unique(array) {
        return array.filter((a, i) => array.indexOf(a) === i);
    }
    /** Flattens a nested array into a single list. */
    function flatten(array) {
        return array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
    }
    /** Breaks an array into chunks of size at most n. */
    function chunk(array, n) {
        const chunks = [];
        for (let i = 0; i < array.length; i += n) {
            chunks.push(array.slice(i, i + n));
        }
        return chunks;
    }
    /** Join multiple Arrays */
    function join(...arrays) {
        return arrays.reduce((a, x) => a.concat(x), []);
    }
    //# sourceMappingURL=arrays.js.map

    // =============================================================================
    /** Splits a string into space separated words. */
    function words(str, divider = /\s+/) {
        if (!str)
            return [];
        return str.trim().split(divider);
    }
    /** Converts a string to camel case. */
    function toCamelCase(str) {
        return str.toLowerCase().replace(/^-/, '')
            .replace(/-(.)/g, (_, g) => g.toUpperCase());
    }
    //# sourceMappingURL=strings.js.map

    // =============================================================================
    /** Base class for event management. */
    class EventTarget {
        constructor() {
            this.events = new Map();
        }
        /** Adds an event listener for one or more events. */
        on(events, fn) {
            for (let e of words(events)) {
                if (!this.events.has(e))
                    this.events.set(e, []);
                this.events.get(e).push(fn);
            }
        }
        /** Adds a one-time event listener to one or more events. */
        one(events, fn) {
            const callback = (e) => {
                this.off(events, callback);
                fn(e);
            };
            this.on(events, callback);
        }
        /** Removes an event listener from one or more events. */
        off(events, fn) {
            for (let e of words(events)) {
                if (this.events.has(e)) {
                    this.events.set(e, this.events.get(e).filter(x => x !== fn));
                }
            }
        }
        /** Triggers one or more events, and executes all bound event listeners. */
        trigger(events, arg) {
            for (let e of words(events)) {
                if (this.events.has(e)) {
                    for (const callback of this.events.get(e)) {
                        callback(arg);
                    }
                }
            }
        }
    }
    //# sourceMappingURL=events.js.map

    // ============================================================================
    // Fermat.js | Utility Functions
    // (c) Mathigon
    // ============================================================================
    const PRECISION = 0.000001;
    // -----------------------------------------------------------------------------
    // Checks and Comparisons
    /** Checks if two numbers are nearly equals. */
    function nearlyEquals(x, y, t = PRECISION) {
        if (isNaN(x) || isNaN(y))
            return false;
        return Math.abs(x - y) < t;
    }
    /** Checks if a number x is between two numbers a and b. */
    function isBetween(x, a, b, t = PRECISION) {
        if (a > b)
            [a, b] = [b, a];
        return x > a + t && x < b - t;
    }
    // -----------------------------------------------------------------------------
    // String Conversion
    const NUM_REGEX = /(\d+)(\d{3})/;
    const POWER_SUFFIX = ['', 'k', 'm', 'b', 't', 'q'];
    function addThousandSeparators(x) {
        let [n, dec] = x.split('.');
        while (NUM_REGEX.test(n)) {
            n = n.replace(NUM_REGEX, '$1,$2');
        }
        return n + (dec ? '.' + dec : '');
    }
    function addPowerSuffix(n, places = 6) {
        if (!places)
            return '' + n;
        // Trim short numbers to the appropriate number of decimal places.
        const d = ('' + Math.abs(Math.floor(n))).length;
        const m = n < 0 ? 1 : 0;
        if (d <= places - m)
            return '' + round(n, places - d - m - 1);
        // Append a power suffix to longer numbers.
        const x = Math.floor(Math.log10(Math.abs(n)) / 3);
        return (round(n / Math.pow(10, 3 * x), places - ((d % 3) || 3) - m - 1))
            + POWER_SUFFIX[x];
    }
    /**
     * Converts a number to a clean string, by rounding, adding power suffixes, and
     * adding thousands separators. `places` is the number of digits to show in the
     * result.
     */
    function numberFormat(n, places = 0, seperators = true) {
        const str = addPowerSuffix(n, places).replace('-', '–');
        return seperators ? addThousandSeparators(str) : str;
    }
    /** Rounds a number `n` to `precision` decimal places. */
    function round(n, precision = 0) {
        let factor = Math.pow(10, precision);
        return Math.round(n * factor) / factor;
    }
    /** Round a number `n` to the nearest multiple of `increment`. */
    function roundTo(n, increment = 1) {
        return Math.round(n / increment) * increment;
    }
    // -----------------------------------------------------------------------------
    // Simple Operations
    /** Bounds a number between a lower and an upper limit. */
    function clamp(x, min = -Infinity, max = Infinity) {
        return Math.min(max, Math.max(min, x));
    }
    /** Linear interpolation */
    function lerp(a, b, t = 0.5) {
        return a + (b - a) * t;
    }
    /** Squares a number. */
    function square(x) {
        return x * x;
    }
    //# sourceMappingURL=arithmetic.js.map

    // ============================================================================
    /**
     * Returns an array of all possible subsets of an input array (of given length).
     */
    function subsets(array, length = 0) {
        const copy = array.slice(0);
        const results = subsetsHelper(copy);
        return length ? results.filter(x => x.length === length) : results;
    }
    function subsetsHelper(array) {
        if (array.length === 1)
            return [[], array];
        const last = array.pop();
        const subsets = subsetsHelper(array);
        const result = [];
        for (const s of subsets) {
            result.push(s, [...s, last]);
        }
        return result;
    }
    //# sourceMappingURL=combinatorics.js.map

    // ============================================================================
    /** Checks if a number n is prime. */
    function isPrime(n) {
        if (n % 1 !== 0 || n < 2)
            return false;
        if (n % 2 === 0)
            return (n === 2);
        if (n % 3 === 0)
            return (n === 3);
        const m = Math.sqrt(n);
        for (let i = 5; i <= m; i += 6) {
            if (n % i === 0)
                return false;
            if (n % (i + 2) === 0)
                return false;
        }
        return true;
    }
    //# sourceMappingURL=number-theory.js.map

    // =============================================================================
    // -----------------------------------------------------------------------------
    // Points
    /** A single point class defined by two coordinates x and y. */
    class Point {
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
            this.type = 'point';
        }
        get unitVector() {
            if (nearlyEquals(this.length, 0))
                return new Point(1, 0);
            return this.scale(1 / this.length);
        }
        get length() {
            return Math.sqrt(this.x ** 2 + this.y ** 2);
        }
        get inverse() {
            return new Point(-this.x, -this.y);
        }
        get flip() {
            return new Point(this.y, this.x);
        }
        get perpendicular() {
            return new Point(-this.y, this.x);
        }
        get array() {
            return [this.x, this.y];
        }
        /** Finds the perpendicular distance between this point and a line. */
        distanceFromLine(l) {
            return Point.distance(this, l.project(this));
        }
        /** Clamps this point to specific bounds. */
        clamp(bounds, padding = 0) {
            const x = clamp(this.x, bounds.xMin + padding, bounds.xMax - padding);
            const y = clamp(this.y, bounds.yMin + padding, bounds.yMax - padding);
            return new Point(x, y);
        }
        /** Transforms this point using a 2x3 matrix m. */
        transform(m) {
            const x = m[0][0] * this.x + m[0][1] * this.y + m[0][2];
            const y = m[1][0] * this.x + m[1][1] * this.y + m[1][2];
            return new Point(x, y);
        }
        /** Rotates this point by a given angle (in radians) around c. */
        rotate(angle, c = ORIGIN) {
            const x0 = this.x - c.x;
            const y0 = this.y - c.y;
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const x = x0 * cos - y0 * sin + c.x;
            const y = x0 * sin + y0 * cos + c.y;
            return new Point(x, y);
        }
        /** Reflects this point across a line l. */
        reflect(l) {
            let v = l.p2.x - l.p1.x;
            let w = l.p2.y - l.p1.y;
            let x0 = this.x - l.p1.x;
            let y0 = this.y - l.p1.y;
            let mu = (v * y0 - w * x0) / (v * v + w * w);
            let x = this.x + 2 * mu * w;
            let y = this.y - 2 * mu * v;
            return new Point(x, y);
        }
        scale(sx, sy = sx) {
            return new Point(this.x * sx, this.y * sy);
        }
        shift(x, y = x) {
            return new Point(this.x + x, this.y + y);
        }
        translate(p) {
            return this.shift(p.x, p.y); // Alias for .add()
        }
        changeCoordinates(originCoords, targetCoords) {
            const x = targetCoords.xMin + (this.x - originCoords.xMin) /
                (originCoords.dx) * (targetCoords.dx);
            const y = targetCoords.yMin + (this.y - originCoords.yMin) /
                (originCoords.dy) * (targetCoords.dy);
            return new Point(x, y);
        }
        add(p) {
            return Point.sum(this, p);
        }
        subtract(p) {
            return Point.difference(this, p);
        }
        equals(other) {
            return nearlyEquals(this.x, other.x) && nearlyEquals(this.y, other.y);
        }
        round(inc = 1) {
            return new Point(roundTo(this.x, inc), roundTo(this.y, inc));
        }
        floor() {
            return new Point(Math.floor(this.x), Math.floor(this.y));
        }
        mod(x, y = x) {
            return new Point(this.x % x, this.y % y);
        }
        angle(c = ORIGIN) {
            return rad(this, c);
        }
        /** Calculates the average of multiple points. */
        static average(...points) {
            let x = total(points.map(p => p.x)) / points.length;
            let y = total(points.map(p => p.y)) / points.length;
            return new Point(x, y);
        }
        /** Calculates the dot product of two points p1 and p2. */
        static dot(p1, p2) {
            return p1.x * p2.x + p1.y * p2.y;
        }
        static sum(p1, p2) {
            return new Point(p1.x + p2.x, p1.y + p2.y);
        }
        static difference(p1, p2) {
            return new Point(p1.x - p2.x, p1.y - p2.y);
        }
        /** Returns the Euclidean distance between two points p1 and p2. */
        static distance(p1, p2) {
            return Math.sqrt(square(p1.x - p2.x) + square(p1.y - p2.y));
        }
        /** Returns the Manhattan distance between two points p1 and p2. */
        static manhattan(p1, p2) {
            return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
        }
        /** Interpolates two points p1 and p2 by a factor of t. */
        static interpolate(p1, p2, t = 0.5) {
            return new Point(lerp(p1.x, p2.x, t), lerp(p1.y, p2.y, t));
        }
        /** Interpolates a list of multiple points. */
        static interpolateList(points, t = 0.5) {
            const n = points.length - 1;
            const a = Math.floor(clamp(t, 0, 1) * n);
            return Point.interpolate(points[a], points[a + 1], n * t - a);
        }
        /** Creates a point from polar coordinates. */
        static fromPolar(angle, r = 1) {
            return new Point(r * Math.cos(angle), r * Math.sin(angle));
        }
    }
    const ORIGIN = new Point(0, 0);
    // -----------------------------------------------------------------------------
    // Angles
    const TWO_PI = 2 * Math.PI;
    function rad(p, c = ORIGIN) {
        const a = Math.atan2(p.y - c.y, p.x - c.x);
        return (a + TWO_PI) % TWO_PI;
    }
    // -----------------------------------------------------------------------------
    // Lines, Rays and Line Segments
    /** An infinite straight line that goes through two points. */
    class Line {
        constructor(p1, p2) {
            this.p1 = p1;
            this.p2 = p2;
            this.type = 'line';
        }
        make(p1, p2) {
            return new Line(p1, p2);
        }
        /* The distance between the two points defining this line. */
        get length() {
            return Point.distance(this.p1, this.p2);
        }
        /** The midpoint of this line. */
        get midpoint() {
            return Point.average(this.p1, this.p2);
        }
        /** The slope of this line. */
        get slope() {
            return (this.p2.y - this.p1.y) / (this.p2.x - this.p1.x);
        }
        /** The y-axis intercept of this line. */
        get intercept() {
            return this.p1.y + this.slope * this.p1.x;
        }
        /** The angle formed between this line and the x-axis. */
        get angle() {
            return rad(this.p2, this.p1);
        }
        /** The point representing a unit vector along this line. */
        get unitVector() {
            return this.p2.subtract(this.p1).unitVector;
        }
        /** The point representing the perpendicular vector of this line. */
        get perpendicularVector() {
            return new Point(this.p2.y - this.p1.y, this.p1.x - this.p2.x).unitVector;
        }
        /** Finds the line parallel to this one, going though point p. */
        parallel(p) {
            const q = Point.sum(p, Point.difference(this.p2, this.p1));
            return new Line(p, q);
        }
        /** Finds the line perpendicular to this one, going though point p. */
        perpendicular(p) {
            return new Line(p, Point.sum(p, this.perpendicularVector));
        }
        /** The perpendicular bisector of this line. */
        get perpendicularBisector() {
            return this.perpendicular(this.midpoint);
        }
        /** Projects this point onto the line `l`. */
        project(p) {
            const a = Point.difference(this.p2, this.p1);
            const b = Point.difference(p, this.p1);
            const proj = a.scale(Point.dot(a, b) / this.length ** 2);
            return Point.sum(this.p1, proj);
        }
        /** Checks if a point p lies on this line. */
        contains(p) {
            // det([[p.x, p.y, 1],[p1.x, p1.y, 1],[p2.x, ,p2.y 1]])
            const det = p.x * (this.p1.y - this.p2.y) + this.p1.x * (this.p2.y - p.y)
                + this.p2.x * (p.y - this.p1.y);
            return nearlyEquals(det, 0);
        }
        at(t) {
            return Point.interpolate(this.p1, this.p2, t);
        }
        transform(m) {
            return new this.constructor(this.p1.transform(m), this.p2.transform(m));
        }
        rotate(a, c = ORIGIN) {
            return new this.constructor(this.p1.rotate(a, c), this.p2.rotate(a, c));
        }
        reflect(l) {
            return new this.constructor(this.p1.reflect(l), this.p2.reflect(l));
        }
        scale(sx, sy = sx) {
            return this.make(this.p1.scale(sx, sy), this.p2.scale(sx, sy));
        }
        shift(x, y = x) {
            return this.make(this.p1.shift(x, y), this.p2.shift(x, y));
        }
        translate(p) {
            return this.shift(p.x, p.y);
        }
        equals(other) {
            return this.contains(other.p1) && this.contains(other.p2);
        }
    }
    function isPolygonLike(shape) {
        return isOneOf(shape.type, 'polygon', 'polyline', 'rectangle');
    }
    function isLineLike(shape) {
        return isOneOf(shape.type, 'line', 'ray', 'segment');
    }
    function isCircle(shape) {
        return shape.type === 'circle';
    }
    // -----------------------------------------------------------------------------
    // Intersections
    function liesOnSegment(s, p) {
        if (nearlyEquals(s.p1.x, s.p2.x))
            return isBetween(p.y, s.p1.y, s.p2.y);
        return isBetween(p.x, s.p1.x, s.p2.x);
    }
    function liesOnRay(r, p) {
        if (nearlyEquals(r.p1.x, r.p2.x))
            return (p.y - r.p1.y) / (r.p2.y - r.p1.y) >
                0;
        return (p.x - r.p1.x) / (r.p2.x - r.p1.x) > 0;
    }
    function lineLineIntersection(l1, l2) {
        const d1x = l1.p1.x - l1.p2.x;
        const d1y = l1.p1.y - l1.p2.y;
        const d2x = l2.p1.x - l2.p2.x;
        const d2y = l2.p1.y - l2.p2.y;
        const d = d1x * d2y - d1y * d2x;
        if (nearlyEquals(d, 0))
            return []; // Colinear lines never intersect
        const q1 = l1.p1.x * l1.p2.y - l1.p1.y * l1.p2.x;
        const q2 = l2.p1.x * l2.p2.y - l2.p1.y * l2.p2.x;
        const x = q1 * d2x - d1x * q2;
        const y = q1 * d2y - d1y * q2;
        return [new Point(x / d, y / d)];
    }
    function circleCircleIntersection(c1, c2) {
        const d = Point.distance(c1.c, c2.c);
        // Circles are separate:
        if (d > c1.r + c2.r)
            return [];
        // One circles contains the other:
        if (d < Math.abs(c1.r - c2.r))
            return [];
        // Circles are the same:
        if (nearlyEquals(d, 0) && nearlyEquals(c1.r, c2.r))
            return [];
        // Circles touch:
        if (nearlyEquals(d, c1.r + c2.r))
            return [new Line(c1.c, c2.c).midpoint];
        const a = (square(c1.r) - square(c2.r) + square(d)) / (2 * d);
        const b = Math.sqrt(square(c1.r) - square(a));
        const px = (c2.c.x - c1.c.x) * a / d + (c2.c.y - c1.c.y) * b / d + c1.c.x;
        const py = (c2.c.y - c1.c.y) * a / d - (c2.c.x - c1.c.x) * b / d + c1.c.y;
        const qx = (c2.c.x - c1.c.x) * a / d - (c2.c.y - c1.c.y) * b / d + c1.c.x;
        const qy = (c2.c.y - c1.c.y) * a / d + (c2.c.x - c1.c.x) * b / d + c1.c.y;
        return [new Point(px, py), new Point(qx, qy)];
    }
    // From http://mathworld.wolfram.com/Circle-LineIntersection.html
    function lineCircleIntersection(l, c) {
        const dx = l.p2.x - l.p1.x;
        const dy = l.p2.y - l.p1.y;
        const dr2 = square(dx) + square(dy);
        const cx = c.c.x;
        const cy = c.c.y;
        const D = (l.p1.x - cx) * (l.p2.y - cy) - (l.p2.x - cx) * (l.p1.y - cy);
        const disc = square(c.r) * dr2 - square(D);
        if (disc < 0)
            return []; // No solution
        const xa = D * dy / dr2;
        const ya = -D * dx / dr2;
        if (nearlyEquals(disc, 0))
            return [c.c.shift(xa, ya)]; // One solution
        const xb = dx * (dy < 0 ? -1 : 1) * Math.sqrt(disc) / dr2;
        const yb = Math.abs(dy) * Math.sqrt(disc) / dr2;
        return [c.c.shift(xa + xb, ya + yb), c.c.shift(xa - xb, ya - yb)];
    }
    /** Returns the intersection of two or more geometry objects. */
    function intersections(...elements) {
        if (elements.length < 2)
            return [];
        if (elements.length > 2)
            return flatten(subsets(elements, 2).map(e => intersections(...e)));
        let [a, b] = elements;
        if (isPolygonLike(b))
            [a, b] = [b, a];
        if (isPolygonLike(a)) {
            // This hack is necessary to capture intersections between a line and a
            // vertex of a polygon. There are more edge cases to consider!
            const vertices = isLineLike(b) ?
                a.points.filter(p => b.contains(p)) : [];
            return [...vertices, ...intersections(b, ...a.edges)];
        }
        // TODO Handle arcs, sectors and angles!
        return simpleIntersection(a, b);
    }
    /** Finds the intersection of two lines or circles. */
    function simpleIntersection(a, b) {
        let results = [];
        // TODO Handle Arcs and Rays
        if (isLineLike(a) && isLineLike(b)) {
            results = lineLineIntersection(a, b);
        }
        else if (isLineLike(a) && isCircle(b)) {
            results = lineCircleIntersection(a, b);
        }
        else if (isCircle(a) && isLineLike(b)) {
            results = lineCircleIntersection(b, a);
        }
        else if (isCircle(a) && isCircle(b)) {
            results = circleCircleIntersection(a, b);
        }
        for (const x of [a, b]) {
            if (x.type === 'segment')
                results =
                    results.filter(i => liesOnSegment(x, i));
            if (x.type === 'ray')
                results = results.filter(i => liesOnRay(x, i));
        }
        return results;
    }
    //# sourceMappingURL=geometry.js.map

    // =============================================================================
    var Matrix;
    (function (Matrix) {
        // ---------------------------------------------------------------------------
        // Constructors
        /** Fills a matrix of size x, y with a given value. */
        function fill(value, x, y) {
            return repeat2D(value, x, y);
        }
        Matrix.fill = fill;
        /** Returns the identity matrix of size n. */
        function identity(n = 2) {
            const x = fill(0, n, n);
            for (let i = 0; i < n; ++i)
                x[i][i] = 1;
            return x;
        }
        Matrix.identity = identity;
        function rotation(angle) {
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);
            return [[cos, -sin], [sin, cos]];
        }
        Matrix.rotation = rotation;
        function shear(lambda) {
            return [[1, lambda], [0, 1]];
        }
        Matrix.shear = shear;
        function reflection(angle) {
            const sin = Math.sin(2 * angle);
            const cos = Math.cos(2 * angle);
            return [[cos, sin], [sin, -cos]];
        }
        Matrix.reflection = reflection;
        // ---------------------------------------------------------------------------
        // Matrix Operations
        /** Calculates the sum of two or more matrices. */
        function sum(...matrices) {
            const [M1, ...rest] = matrices;
            const M2 = rest.length > 1 ? sum(...rest) : rest[0];
            if (M1.length !== M2.length || M1[0].length !== M2[0].length)
                throw new Error('Matrix sizes don’t match');
            const S = [];
            for (let i = 0; i < M1.length; ++i) {
                const row = [];
                for (let j = 0; j < M1[i].length; ++j) {
                    row.push(M1[i][j] + M2[i][j]);
                }
                S.push(row);
            }
            return S;
        }
        Matrix.sum = sum;
        /** Multiplies a matrix M by a scalar v. */
        function scalarProduct(M, v) {
            return M.map(row => row.map((x, i) => x * v));
        }
        Matrix.scalarProduct = scalarProduct;
        /** Calculates the matrix product of multiple matrices. */
        function product(...matrices) {
            let [M1, ...rest] = matrices;
            let M2 = rest.length > 1 ? product(...rest) : rest[0];
            if (M1[0].length !== M2.length)
                throw new Error('Matrix sizes don’t match.');
            let P = [];
            for (let i = 0; i < M1.length; ++i) {
                let row = [];
                for (let j = 0; j < M2[0].length; ++j) {
                    let value = 0;
                    for (let k = 0; k < M2.length; ++k) {
                        value += M1[i][k] * M2[k][j];
                    }
                    row.push(value);
                }
                P.push(row);
            }
            return P;
        }
        Matrix.product = product;
        // ---------------------------------------------------------------------------
        // Matrix Properties
        /** Calculates the transpose of a matrix M. */
        function transpose(M) {
            let T = [];
            for (let j = 0; j < M[0].length; ++j) {
                let row = [];
                for (let i = 0; i < M.length; ++i) {
                    row.push(M[i][j]);
                }
                T.push(row);
            }
            return T;
        }
        Matrix.transpose = transpose;
        /** Calculates the determinant of a matrix M. */
        function determinant(M) {
            if (M.length !== M[0].length)
                throw new Error('Not a square matrix.');
            let n = M.length;
            // Shortcuts for small n
            if (n === 1)
                return M[0][0];
            if (n === 2)
                return M[0][0] * M[1][1] - M[0][1] * M[1][0];
            let det = 0;
            for (let j = 0; j < n; ++j) {
                let diagLeft = M[0][j];
                let diagRight = M[0][j];
                for (let i = 1; i < n; ++i) {
                    diagRight *= M[i][j + i % n];
                    diagLeft *= M[i][j - i % n];
                }
                det += diagRight - diagLeft;
            }
            return det;
        }
        Matrix.determinant = determinant;
        /** Calculates the inverse of a matrix M. */
        function inverse(M) {
            // Perform Gaussian elimination:
            // (1) Apply the same operations to both I and C.
            // (2) Turn C into the identity, thereby turning I into the inverse of C.
            let n = M.length;
            if (n !== M[0].length)
                throw new Error('Not a square matrix.');
            let I = identity(n);
            let C = tabulate2D((x, y) => M[x][y], n, n); // Copy of original matrix
            for (let i = 0; i < n; ++i) {
                // Loop over the elements e in along the diagonal of C.
                let e = C[i][i];
                // If e is 0, we need to swap this row with a lower row.
                if (!e) {
                    for (let ii = i + 1; ii < n; ++ii) {
                        if (C[ii][i] !== 0) {
                            for (let j = 0; j < n; ++j) {
                                [C[ii][j], C[i][j]] = [C[i][j], C[ii][j]];
                                [I[ii][j], I[i][j]] = [I[i][j], I[ii][j]];
                            }
                            break;
                        }
                    }
                    e = C[i][i];
                    if (!e)
                        throw new Error('Matrix not invertible.');
                }
                // Scale row by e, so that we have a 1 on the diagonal.
                for (let j = 0; j < n; ++j) {
                    C[i][j] = C[i][j] / e;
                    I[i][j] = I[i][j] / e;
                }
                // Subtract a multiple of this row from all other rows,
                // so that they end up having 0s in this column.
                for (let ii = 0; ii < n; ++ii) {
                    if (ii === i)
                        continue;
                    let f = C[ii][i];
                    for (let j = 0; j < n; ++j) {
                        C[ii][j] -= f * C[i][j];
                        I[ii][j] -= f * I[i][j];
                    }
                }
            }
            return I;
        }
        Matrix.inverse = inverse;
    })(Matrix || (Matrix = {}));
    //# sourceMappingURL=matrix.js.map

    // ============================================================================
    var Random;
    (function (Random) {
        /** Randomly shuffles the elements in an array a. */
        function shuffle(a) {
            a = a.slice(0); // create copy
            for (let i = a.length - 1; i > 0; --i) {
                let j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }
        Random.shuffle = shuffle;
        /** Generates a random integer between 0 and a, or between a and b. */
        function integer(a, b) {
            let start = (b === undefined ? 0 : a);
            let length = (b === undefined ? a : b - a + 1);
            return start + Math.floor(length * Math.random());
        }
        Random.integer = integer;
        /** Chooses a random index value from weights [2, 5, 3] */
        function weighted(weights) {
            const x = Math.random() * total(weights);
            let cum = 0;
            return weights.findIndex((w) => (cum += w) >= x);
        }
        Random.weighted = weighted;
        // ---------------------------------------------------------------------------
        // Smart Random Number Generators
        const SMART_RANDOM_CACHE = new Map();
        /**
         * Returns a random number between 0 and n, but avoids returning the same
         * number multiple times in a row.
         */
        function smart(n, id) {
            if (!id)
                id = uid();
            if (!SMART_RANDOM_CACHE.has(id))
                SMART_RANDOM_CACHE.set(id, repeat(1, n));
            const cache = SMART_RANDOM_CACHE.get(id);
            const x = weighted(cache.map(x => x * x));
            cache[x] -= 1;
            if (cache[x] <= 0)
                SMART_RANDOM_CACHE.set(id, cache.map(x => x + 1));
            return x;
        }
        Random.smart = smart;
        // ---------------------------------------------------------------------------
        // Probability Distribution
        /** Generates a Bernoulli random variable. */
        function bernoulli(p = 0.5) {
            return (Math.random() < p ? 1 : 0);
        }
        Random.bernoulli = bernoulli;
        /** Generates a Binomial random variable. */
        function binomial(n = 1, p = 0.5) {
            let t = 0;
            for (let i = 0; i < n; ++i)
                t += bernoulli(p);
            return t;
        }
        Random.binomial = binomial;
        /** Generates a Poisson random variable. */
        function poisson(l = 1) {
            if (l <= 0)
                return 0;
            const L = Math.exp(-l);
            let p = 1;
            let k = 0;
            for (; p > L; ++k)
                p *= Math.random();
            return k - 1;
        }
        Random.poisson = poisson;
        /** Generates a uniform random variable. */
        function uniform(a = 0, b = 1) {
            return a + (b - a) * Math.random();
        }
        Random.uniform = uniform;
        /** Generates a normal random variable with mean m and variance v. */
        function normal(m = 0, v = 1) {
            const u1 = Math.random();
            const u2 = Math.random();
            const rand = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
            return rand * Math.sqrt(v) + m;
        }
        Random.normal = normal;
        /** Generates an exponential random variable. */
        function exponential(l = 1) {
            return l <= 0 ? 0 : -Math.log(Math.random()) / l;
        }
        Random.exponential = exponential;
        /** Generates a geometric random variable. */
        function geometric(p = 0.5) {
            if (p <= 0 || p > 1)
                return undefined;
            return Math.floor(Math.log(Math.random()) / Math.log(1 - p));
        }
        Random.geometric = geometric;
        /** Generates an Cauchy random variable. */
        function cauchy() {
            let rr, v1, v2;
            do {
                v1 = 2 * Math.random() - 1;
                v2 = 2 * Math.random() - 1;
                rr = v1 * v1 + v2 * v2;
            } while (rr >= 1);
            return v1 / v2;
        }
        Random.cauchy = cauchy;
        // ---------------------------------------------------------------------------
        // PDFs and CDFs
        /** Generates pdf(x) for the normal distribution with mean m and variance v. */
        function normalPDF(x, m = 1, v = 0) {
            return Math.exp(-((x - m) ** 2) / (2 * v)) / Math.sqrt(2 * Math.PI * v);
        }
        Random.normalPDF = normalPDF;
        const G = 7;
        const P = [
            0.99999999999980993,
            676.5203681218851,
            -1259.1392167224028,
            771.32342877765313,
            -176.61502916214059,
            12.507343278686905,
            -0.13857109526572012,
            9.9843695780195716e-6,
            1.5056327351493116e-7
        ];
        function gamma(z) {
            if (z < 0.5)
                return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
            z -= 1;
            let x = P[0];
            for (let i = 1; i < G + 2; i++)
                x += P[i] / (z + i);
            let t = z + G + 0.5;
            return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
        }
        /** Riemann-integrates fn(x) from xMin to xMax with an interval size dx. */
        function integrate(fn, xMin, xMax, dx = 1) {
            let result = 0;
            for (let x = xMin; x < xMax; x += dx) {
                result += (fn(x) * dx || 0);
            }
            return result;
        }
        Random.integrate = integrate;
        /** The chi CDF function. */
        function chiCDF(chi, deg) {
            let int = integrate(t => Math.pow(t, (deg - 2) / 2) * Math.exp(-t / 2), 0, chi);
            return 1 - int / Math.pow(2, deg / 2) / gamma(deg / 2);
        }
        Random.chiCDF = chiCDF;
    })(Random || (Random = {}));
    //# sourceMappingURL=random.js.map

    // =============================================================================
    var Regression;
    (function (Regression) {
        /**
         * Finds a linear regression that best approximates a set of data. The result
         * will be an array [c, m], where y = m * x + c.
         */
        function linear(data, throughOrigin = false) {
            let sX = 0, sY = 0, sXX = 0, sXY = 0;
            const len = data.length;
            for (let n = 0; n < len; n++) {
                sX += data[n][0];
                sY += data[n][1];
                sXX += data[n][0] * data[n][0];
                sXY += data[n][0] * data[n][1];
            }
            if (throughOrigin) {
                const gradient = sXY / sXX;
                return [0, gradient];
            }
            const gradient = (len * sXY - sX * sY) / (len * sXX - sX * sX);
            const intercept = (sY / len) - (gradient * sX) / len;
            return [intercept, gradient];
        }
        Regression.linear = linear;
        /**
         * Finds an exponential regression that best approximates a set of data. The
         * result will be an array [a, b], where y = a * e^(bx).
         */
        function exponential(data) {
            const sum = [0, 0, 0, 0, 0, 0];
            for (const d of data) {
                sum[0] += d[0];
                sum[1] += d[1];
                sum[2] += d[0] * d[0] * d[1];
                sum[3] += d[1] * Math.log(d[1]);
                sum[4] += d[0] * d[1] * Math.log(d[1]);
                sum[5] += d[0] * d[1];
            }
            const denominator = (sum[1] * sum[2] - sum[5] * sum[5]);
            const a = Math.exp((sum[2] * sum[3] - sum[5] * sum[4]) / denominator);
            const b = (sum[1] * sum[4] - sum[5] * sum[3]) / denominator;
            return [a, b];
        }
        Regression.exponential = exponential;
        /**
         * Finds a logarithmic regression that best approximates a set of data. The
         * result will be an array [a, b], where y = a + b * log(x).
         */
        function logarithmic(data) {
            const sum = [0, 0, 0, 0];
            const len = data.length;
            for (const d of data) {
                sum[0] += Math.log(d[0]);
                sum[1] += d[1] * Math.log(d[0]);
                sum[2] += d[1];
                sum[3] += Math.pow(Math.log(d[0]), 2);
            }
            const b = (len * sum[1] - sum[2] * sum[0]) /
                (len * sum[3] - sum[0] * sum[0]);
            const a = (sum[2] - b * sum[0]) / len;
            return [a, b];
        }
        Regression.logarithmic = logarithmic;
        /**
         * Finds a power regression that best approximates a set of data. The result
         * will be an array [a, b], where y = a * x^b.
         */
        function power(data) {
            const sum = [0, 0, 0, 0];
            const len = data.length;
            for (const d of data) {
                sum[0] += Math.log(d[0]);
                sum[1] += Math.log(d[1]) * Math.log(d[0]);
                sum[2] += Math.log(d[1]);
                sum[3] += Math.pow(Math.log(d[0]), 2);
            }
            const b = (len * sum[1] - sum[2] * sum[0]) /
                (len * sum[3] - sum[0] * sum[0]);
            const a = Math.exp((sum[2] - b * sum[0]) / len);
            return [a, b];
        }
        Regression.power = power;
        /**
         * Finds a polynomial regression of given `order` that best approximates a set
         * of data. The result will be an array giving the coefficients of the
         * resulting polynomial.
         */
        function polynomial(data, order = 2) {
            // X = [[1, x1, x1^2], [1, x2, x2^2], [1, x3, x3^2]
            // y = [y1, y2, y3]
            let X = data.map(d => list(order + 1).map(p => Math.pow(d[0], p)));
            let XT = Matrix.transpose(X);
            let y = data.map(d => [d[1]]);
            let XTX = Matrix.product(XT, X); // XT*X
            let inv = Matrix.inverse(XTX); // (XT*X)^(-1)
            let r = Matrix.product(inv, XT, y); // (XT*X)^(-1) * XT * y
            return r.map(x => x[0]); // Flatten matrix
        }
        Regression.polynomial = polynomial;
        // ---------------------------------------------------------------------------
        // Regression Coefficient
        /**
         * Finds the regression coefficient of a given data set and regression
         * function.
         */
        function coefficient(data, fn) {
            let total = data.reduce((sum, d) => sum + d[1], 0);
            let mean = total / data.length;
            // Sum of squares of differences from the mean in the dependent variable
            let ssyy = data.reduce((sum, d) => sum + (d[1] - mean) ** 2, 0);
            // Sum of squares of residuals
            let sse = data.reduce((sum, d) => sum + (d[1] - fn(d[0])) ** 2, 0);
            return 1 - (sse / ssyy);
        }
        Regression.coefficient = coefficient;
        const types = [{
                name: 'linear',
                regression: linear,
                fn: (p, x) => p[0] + x * p[1]
            }, {
                name: 'quadratic',
                regression: polynomial,
                fn: (p, x) => p[0] + x * p[1] + x * x * p[2]
            }, {
                name: 'cubic',
                regression: (data) => polynomial(data, 3),
                fn: (p, x) => p[0] + x * p[1] + x * x * p[2] + x * x * x *
                    p[3]
            }, {
                name: 'exponential',
                regression: exponential,
                fn: (p, x) => p[0] * Math.pow(Math.E, p[1] * x)
            }];
        /** Finds the most suitable regression for a given dataset. */
        function find(data, threshold = 0.9) {
            if (data.length > 1) {
                for (const t of types) {
                    const params = t.regression(data);
                    const fn = t.fn.bind(undefined, params);
                    const coeff = coefficient(data, fn);
                    if (coeff > threshold)
                        return { type: t.name, fn, params, coeff };
                }
            }
            return { type: undefined, fn: () => { }, params: [], coeff: undefined };
        }
        Regression.find = find;
    })(Regression || (Regression = {}));
    //# sourceMappingURL=regression.js.map

    // =============================================================================
    /** Converts a JSON object to an HTML query string. */
    function toQueryString(data) {
        const pairs = [];
        for (let key of Object.keys(data)) {
            let value = data[key];
            key = encodeURIComponent(key);
            if (value == undefined) {
                pairs.push(key);
                continue;
            }
            value = Array.isArray(value) ? value.join(',') : '' + value;
            value = value.replace(/(\r)?\n/g, '\r\n');
            value = encodeURIComponent(value);
            value = value.replace(/%20/g, '+');
            pairs.push(key + '=' + value);
        }
        return pairs.join('&');
    }
    // -----------------------------------------------------------------------------
    // Request Utilities
    /**
     * Asynchronously loads a resource using a POST request. This utility function
     * automatically form-encodes JSON data and adds a CSRF header.
     */
    function post(url, data) {
        const options = {
            method: 'POST',
            body: !data ? undefined :
                (typeof data === 'string') ? data : toQueryString(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRF-Token': window.csrfToken || ''
            }
        };
        const ext = url.includes('?') ? '&xhr=1' : '?xhr=1';
        return fetch(url + ext, options).then((r) => r.text());
    }
    /** Asynchronously loads and executes a JS script. */
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const el = document.createElement('script');
            el.src = src;
            el.onerror = reject;
            el.onload = resolve;
            document.head.appendChild(el); // TODO Needs document!
        });
    }
    /** Asynchronously loads an Image. */
    function loadImage(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.src = url;
        });
    }
    // -----------------------------------------------------------------------------
    // Deferred Post
    const POST_DATA = new Map();
    function savePostData(url, data) {
        if (POST_DATA.has(url)) {
            deepExtend(POST_DATA.get(url), data, (a, b) => unique(a.concat(b)));
        }
        else {
            POST_DATA.set(url, data);
        }
    }
    function sendPostData() {
        if (!window.navigator.onLine)
            return;
        for (const [url, data] of POST_DATA) {
            // Remove the POST data immediately, but add it back if the request fails.
            // This means that deferredPost() can be called while an AJAX request is
            // in progress, and the data is not lost.
            POST_DATA.delete(url);
            post(url, { data: JSON.stringify(data) })
                .catch((error) => {
                console.error('Failed to send POST request:', error);
                savePostData(url, data);
            });
        }
    }
    const doDeferredPost = throttle(sendPostData, 5000);
    window.addEventListener('online', doDeferredPost);
    window.onbeforeunload = sendPostData;
    //# sourceMappingURL=ajax.js.map

    // =============================================================================
    // Boost.js | Expression Parsing
    // Based on http://jsep.from.so
    // (c) Mathigon
    // =============================================================================
    // -----------------------------------------------------------------------------
    // Interfaces
    var NODE_TYPE;
    (function (NODE_TYPE) {
        NODE_TYPE[NODE_TYPE["Array"] = 0] = "Array";
        NODE_TYPE[NODE_TYPE["BinaryOp"] = 1] = "BinaryOp";
        NODE_TYPE[NODE_TYPE["Call"] = 2] = "Call";
        NODE_TYPE[NODE_TYPE["Conditional"] = 3] = "Conditional";
        NODE_TYPE[NODE_TYPE["Identifier"] = 4] = "Identifier";
        NODE_TYPE[NODE_TYPE["Literal"] = 5] = "Literal";
        NODE_TYPE[NODE_TYPE["Member"] = 6] = "Member";
        NODE_TYPE[NODE_TYPE["UnaryOp"] = 7] = "UnaryOp";
    })(NODE_TYPE || (NODE_TYPE = {}));
    // -----------------------------------------------------------------------------
    // Constants
    const BINARY_OPS = {
        // TODO Operator overloading (e.g. add vectors or complex numbers)
        '===': (a, b) => a === b,
        '!==': (a, b) => a !== b,
        '||': (a, b) => a || b,
        '&&': (a, b) => a && b,
        '==': (a, b) => a == b,
        '!=': (a, b) => a != b,
        '<=': (a, b) => a <= b,
        '>=': (a, b) => a >= b,
        '**': (a, b) => a ** b,
        '<': (a, b) => a < b,
        '>': (a, b) => a > b,
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b
    };
    const UNARY_OPS = {
        '-': (a) => -a,
        '+': (a) => +a,
        '!': (a) => !a
    };
    // Binary operations with their precedence
    const BINARY_PRECEDENCE = {
        '||': 1, '&&': 2,
        '==': 3, '!=': 3, '===': 3, '!==': 3,
        '<': 4, '>': 4, '<=': 4, '>=': 4,
        '+': 5, '-': 5,
        '*': 6, '/': 6, '%': 6,
        '**': 7 // TODO Exponentiation should be right-to-left.
    };
    const LITERALS = {
        'true': true,
        'false': false,
        'undefined': undefined
    };
    const SPACE = /\s/;
    const DIGIT = /[0-9]/;
    const IDENTIFIER_START = /[a-zA-Zα-ωΑ-Ω$_]/; // Variables cannot start with a number.
    const IDENTIFIER_PART = /[0-9a-zA-Zα-ωΑ-Ω$_]/;
    // -----------------------------------------------------------------------------
    // Expression Parser
    function parseSyntaxTree(expr) {
        const length = expr.length;
        let index = 0; // Current cursor position
        function throwError(message) {
            throw new Error(`${message} at character ${index} of "${expr}"`);
        }
        function gobbleSpaces() {
            while (SPACE.test(expr[index]))
                index += 1;
        }
        // Gobble a simple numeric literals (e.g. `12`, `3.4`, `.5`).
        function gobbleNumericLiteral() {
            let number = '';
            while (DIGIT.test(expr[index]))
                number += expr[index++];
            if (expr[index] === '.') {
                number += expr[index++];
                while (DIGIT.test(expr[index]))
                    number += expr[index++];
            }
            const char = expr[index];
            if (char && IDENTIFIER_START.test(char)) {
                const name = number + expr[index];
                throwError(`Variable names cannot start with a number (${name})`);
            }
            else if (char === '.') {
                throwError('Unexpected period');
            }
            return { type: NODE_TYPE.Literal, value: parseFloat(number) };
        }
        // Gobble a string literal, staring with single or double quotes.
        function gobbleStringLiteral() {
            const quote = expr[index];
            index += 1;
            let closed = false;
            let string = '';
            while (index < length) {
                let char = expr[index++];
                if (char === quote) {
                    closed = true;
                    break;
                }
                string += char;
            }
            if (!closed)
                throwError(`Unclosed quote after "${string}"`);
            return { type: NODE_TYPE.Literal, value: string };
        }
        // Gobbles identifiers and literals (e.g. `foo`, `_value`, `$x1`, `true`).
        function gobbleIdentifier() {
            let name = expr[index];
            if (!IDENTIFIER_START.test(expr[index]))
                throwError('Unexpected ' + name);
            index += 1;
            while (index < length) {
                if (IDENTIFIER_PART.test(expr[index])) {
                    name += expr[index++];
                }
                else {
                    break;
                }
            }
            if (name in LITERALS) {
                return { type: NODE_TYPE.Literal, value: LITERALS[name] };
            }
            else {
                return { type: NODE_TYPE.Identifier, name };
            }
        }
        // Gobbles a list of arguments within a function call or array literal. It
        // assumes that the opening character has already been gobbled (e.g.
        // `foo(bar, baz)`, `my_func()`, or `[bar, baz]`).
        function gobbleArguments(termination) {
            const args = [];
            let closed = false;
            let lastArg = undefined;
            while (index < length) {
                if (expr[index] === termination) {
                    if (lastArg)
                        args.push(lastArg);
                    closed = true;
                    index += 1;
                    break;
                }
                else if (expr[index] === ',') {
                    args.push(lastArg || { type: NODE_TYPE.Literal, value: undefined });
                    index += 1;
                }
                else {
                    lastArg = gobbleExpression();
                }
            }
            if (!closed)
                throwError('Expected ' + termination);
            return args;
        }
        // Parse a non-literal variable name. It name may include properties (`foo`,
        // `bar.baz`, `foo['bar'].baz`) or function calls (`Math.acos(obj.angle)`).
        function gobbleVariable() {
            let node;
            if (expr[index] === '(') {
                index += 1;
                node = gobbleExpression();
                gobbleSpaces();
                if (expr[index] === ')') {
                    index += 1;
                    return node;
                }
                else {
                    throwError('Unclosed (');
                }
            }
            else {
                node = gobbleIdentifier();
            }
            gobbleSpaces();
            while ('.[('.includes(expr[index])) {
                if (expr[index] === '.') {
                    // Object property accessors.
                    index++;
                    gobbleSpaces();
                    node = {
                        type: NODE_TYPE.Member,
                        object: node,
                        computed: false,
                        property: gobbleIdentifier()
                    };
                }
                else if (expr[index] === '[') {
                    // Array index accessors.
                    index++;
                    node = {
                        type: NODE_TYPE.Member,
                        object: node,
                        computed: true,
                        property: gobbleExpression()
                    };
                    gobbleSpaces();
                    if (expr[index] !== ']')
                        throwError('Unclosed [');
                    index++;
                }
                else if (expr[index] === '(') {
                    // A function call is being made; gobble all the arguments
                    index++;
                    node = {
                        type: NODE_TYPE.Call,
                        args: gobbleArguments(')'),
                        callee: node
                    };
                }
                gobbleSpaces();
            }
            return node;
        }
        // Search for the operation portion of the string (e.g. `+`, `===`)
        function gobbleBinaryOp() {
            gobbleSpaces();
            for (const length of [3, 2, 1]) { // Different possible operator lengths
                const substr = expr.substr(index, length);
                if (substr in BINARY_OPS) {
                    index += length;
                    return substr;
                }
            }
        }
        // Parse an individual part of a binary expression (e.g. `foo.bar(baz)`, `1`,
        // `"abc"` or `(a % 2)` because it is in parenthesis).
        // TODO Support expressions like `[a, b][c]` or `([a, b])[c]`.
        function gobbleToken() {
            gobbleSpaces();
            let operator = expr[index];
            if (DIGIT.test(operator) || operator === '.') {
                return gobbleNumericLiteral();
            }
            else if (operator === '\'' || operator === '"') {
                // Single or double quotes
                return gobbleStringLiteral();
            }
            else if (operator === '[') {
                index += 1;
                return { type: NODE_TYPE.Array, elements: gobbleArguments(']') };
            }
            else if (operator in UNARY_OPS) {
                index += 1;
                return { type: NODE_TYPE.UnaryOp, operator, argument: gobbleToken() };
            }
            else if (IDENTIFIER_START.test(operator) || operator === '(') {
                // `foo`, `bar.baz`
                return gobbleVariable();
            }
            throwError('Expression parsing error');
        }
        // Parse individual expressions (e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`)
        function gobbleBinaryExpression() {
            let left = gobbleToken();
            let biop = gobbleBinaryOp();
            if (!biop)
                return left;
            let right = gobbleToken();
            if (!right)
                throwError('Expected expression after ' + biop);
            // If there are multiple binary operators, we have to stack them in the
            // correct order using recursive descent.
            let node;
            let stack = [left, biop, right];
            while ((biop = gobbleBinaryOp())) {
                let prec = BINARY_PRECEDENCE[biop];
                let cur_biop = biop;
                while (stack.length > 2 && prec <=
                    BINARY_PRECEDENCE[stack[stack.length - 2]]) {
                    right = stack.pop();
                    biop = stack.pop();
                    left = stack.pop();
                    node = { type: NODE_TYPE.BinaryOp, operator: biop, left, right };
                    stack.push(node);
                }
                node = gobbleToken();
                if (!node)
                    throwError('Expected expression after ' + cur_biop);
                stack.push(cur_biop, node);
            }
            let i = stack.length - 1;
            node = stack[i];
            while (i > 1) {
                node = {
                    type: NODE_TYPE.BinaryOp,
                    operator: stack[i - 1],
                    left: stack[i - 2],
                    right: node
                };
                i -= 2;
            }
            return node;
        }
        // Parse ternary expressions (e.g. `a ? b : c`).
        function gobbleExpression() {
            const test = gobbleBinaryExpression();
            gobbleSpaces();
            if (test && expr[index] === '?') {
                // Ternary expression: test ? consequent : alternate
                index += 1;
                const consequent = gobbleExpression();
                if (!consequent)
                    throwError('Expected expression');
                gobbleSpaces();
                if (expr[index] === ':') {
                    index++;
                    let alternate = gobbleExpression();
                    if (!alternate)
                        throwError('Expected expression');
                    return { type: NODE_TYPE.Conditional, test, consequent, alternate };
                }
                else {
                    throwError('Expected :');
                }
            }
            else {
                return test;
            }
        }
        const node = gobbleExpression();
        if (index < expr.length)
            throwError(`Unexpected "${expr[index]}"`);
        return node;
    }
    // -----------------------------------------------------------------------------
    // Evaluations
    const EMPTY = [undefined, undefined];
    /**
     * Returns [value, this]. We need to keep track of the `this` value so that
     * we can correctly set the context for object member method calls. Unlike
     * normal JavaScript,
     * (1) We evaluate all arguments or logical/ternary operators, so that we can
     *     correctly track dependencies in an Observable() context.
     * (2) All operations are "safe", i.e. when one of the arguments is undefined,
     *     we return undefined, rather than throwing an error.
     */
    function evaluate(node, context) {
        switch (node.type) {
            case NODE_TYPE.Array:
                const v1 = node.elements.map((n) => evaluate(n, context)[0]);
                if (v1.some(v => v === undefined))
                    return EMPTY;
                return [v1, undefined];
            case NODE_TYPE.BinaryOp:
                const left = evaluate(node.left, context)[0];
                const right = evaluate(node.right, context)[0];
                if ('+-**/%'.includes(node.operator) && (left === undefined || right === undefined))
                    return EMPTY;
                return [BINARY_OPS[node.operator](left, right), undefined];
            case NODE_TYPE.Call:
                // Note: we evaluate arguments even if fn is undefined.
                const [fn, self] = evaluate(node.callee, context);
                const args = node.args.map((n) => evaluate(n, context)[0]);
                if (args.some(v => v === undefined) || typeof fn !== 'function')
                    return EMPTY;
                return [fn.apply(self, args), undefined];
            case NODE_TYPE.Conditional:
                // Note: we evaluate all possible options of the unary operator.
                const consequent = evaluate(node.consequent, context);
                const alternate = evaluate(node.alternate, context);
                return evaluate(node.test, context)[0] ? consequent : alternate;
            case NODE_TYPE.Identifier:
                return [context[node.name], undefined];
            case NODE_TYPE.Literal:
                return [node.value, undefined];
            case NODE_TYPE.Member:
                const object = evaluate(node.object, context)[0];
                const property = node.computed ? evaluate(node.property, context)[0] :
                    node.property.name;
                return object ? [object[property], object] : [undefined, undefined];
            case NODE_TYPE.UnaryOp:
                const arg = evaluate(node.argument, context)[0];
                if (arg === undefined)
                    return EMPTY;
                return [UNARY_OPS[node.operator](arg), undefined];
        }
    }
    /**
     * Compiles a JS expression into a function that can be evaluated with context.
     */
    function compile(expr) {
        const node = parseSyntaxTree(expr);
        if (!node)
            return (context = {}) => undefined;
        return (context = {}) => evaluate(node, context)[0];
    }
    // -----------------------------------------------------------------------------
    // Template Strings
    const TEMPLATE = /\${([^}]+)}/g;
    /**
     * Converts an expression string into an executable JS function. It will replace
     * all `${x}` type expressions and evaluate them based on a context.
     */
    function compileString(expr) {
        expr = expr.replace(/×/g, '*');
        // This array contains the alternating static and variable parts of the expr.
        // For example, the input expression `Here ${is} some ${text}` would give
        // parts = ['Here ', 'is', ' some ', 'text', ''].
        const parts = expr.split(TEMPLATE);
        const fns = parts.map((p, i) => (i % 2) ? compile(p) : undefined);
        return (context) => {
            return parts.map((p, i) => {
                if (!(i % 2))
                    return p;
                const value = fns[i](context);
                // Special formatting for negative numbers.
                return (typeof value === 'number' && value < 0) ? '–' + (-value) : value;
            }).join('');
        };
    }
    //# sourceMappingURL=eval.js.map

    // =============================================================================
    const touchSupport = ('ontouchstart' in window);
    const pointerSupport = ('onpointerdown' in window);
    /** Gets the pointer position from an event. */
    function pointerPosition(e) {
        if (e.touches) {
            const touches = e.targetTouches.length ? e.targetTouches : e.changedTouches;
            return new Point(touches[0].clientX, touches[0].clientY);
        }
        else {
            return new Point(e.clientX || 0, e.clientY || 0);
        }
    }
    function getTouches(e) {
        return e.touches || [];
    }
    /**
     * Gets the pointer position from an event triggered on an `<svg>` element, in
     * the coordinate system of the `<svg>` element.
     */
    function svgPointerPosn(event, $svg) {
        const posn = pointerPosition(event);
        return posn.transform($svg.inverseTransformMatrix);
    }
    /**
     * Gets the pointer position from an event triggered on an `<canvas>` element,
     * in the coordinate system of the `<canvas>` element.
     */
    function canvasPointerPosition(event, $canvas) {
        const posn = pointerPosition(event);
        const bounds = $canvas.bounds;
        const x = (posn.x - bounds.left) * $canvas.canvasWidth / bounds.width;
        const y = (posn.y - bounds.top) * $canvas.canvasHeight / bounds.height;
        return new Point(x, y);
    }
    /**
     * Get the target element for an event, including for touch/pointer events
     * that started on a different element.
     */
    function getEventTarget(event) {
        if (event instanceof PointerEvent && event.pointerType === 'mouse') {
            // Only pointer mouse events update the target for move events that started
            // on a different element.
            return $(event.target);
        }
        const posn = pointerPosition(event);
        return $(document.elementFromPoint(posn.x, posn.y) || undefined);
    }
    // -----------------------------------------------------------------------------
    // Click Events
    function makeTapEvent($el) {
        // TODO Support removing events.
        if ($el._data['tapEvent'])
            return;
        $el._data['tapEvent'] = true;
        let start = undefined;
        $el.on('pointerdown', (e) => start = pointerPosition(e));
        $el.on('pointerup', (e) => {
            if (!start)
                return;
            const end = pointerPosition(e);
            if (Point.distance(start, end) < 6)
                $el.trigger('tap', e);
            start = undefined;
        });
        $el.on('pointercancel', () => start = undefined);
    }
    function makeClickOutsideEvent($el) {
        // TODO Support removing events.
        if ($el._data['clickOutsideEvent'])
            return;
        $el._data['clickOutsideEvent'] = true;
        $body.on('pointerdown', (e) => {
            const $target = $(e.target);
            if ($target && ($target.equals($el) || $target.hasParent($el)))
                return;
            $el.trigger('clickOutside', e);
        });
    }
    function slide($el, fns) {
        const $box = fns.$box || $el;
        let posn = pointerPosition;
        if ($box.type === 'svg') {
            posn = (e) => svgPointerPosn(e, $box.$ownerSVG);
        }
        else if ($box.type === 'canvas') {
            posn = (e) => canvasPointerPosition(e, $box);
        }
        const $parent = fns.justInside ? $el : $body;
        let startPosn = undefined;
        let lastPosn = undefined;
        let hasMoved = false;
        let pointerId = 0;
        if ($el.css('touch-action') === 'auto')
            $el.css('touch-action', 'none');
        function start(e) {
            if (e.handled || getTouches(e).length > 1)
                return;
            e.preventDefault();
            hasMoved = false;
            pointerId = e.pointerId || 0;
            $parent.on('pointermove', move);
            $parent.on('pointerstop', end);
            startPosn = lastPosn = posn(e);
            if (fns.down)
                fns.down(startPosn);
        }
        function move(e) {
            if (pointerId && e.pointerId !== pointerId)
                return;
            e.preventDefault();
            const p = posn(e);
            if (Point.distance(p, lastPosn) < 0.5)
                return;
            if (!hasMoved && fns.start)
                fns.start(startPosn);
            if (fns.move)
                fns.move(p, startPosn, lastPosn);
            lastPosn = p;
            hasMoved = true;
        }
        function end(e) {
            if (pointerId && e.pointerId !== pointerId)
                return;
            e.preventDefault();
            $parent.off('pointermove', move);
            $parent.off('pointerstop', end);
            if (fns.up)
                fns.up(lastPosn, startPosn);
            if (hasMoved && fns.end)
                fns.end(lastPosn, startPosn);
            if (!hasMoved && fns.click)
                fns.click(startPosn);
        }
        $el.on('pointerdown', start);
        if (fns.justInside)
            $el.on('mouseleave', end);
        if (fns.accessible) {
            $el.setAttr('tabindex', '0');
            document.addEventListener('keydown', (e) => {
                if (![37, 38, 39, 40].includes(e.keyCode))
                    return;
                if ($el !== Browser.getActiveInput())
                    return;
                const center = $el.boxCenter;
                const start = posn({ clientX: center.x, clientY: center.y });
                const dx = (e.keyCode === 37) ? -25 : (e.keyCode === 39) ? 25 : 0;
                const dy = (e.keyCode === 38) ? -25 : (e.keyCode === 40) ? 25 : 0;
                const end = start.shift(dx, dy);
                if (fns.down)
                    fns.down(start);
                if (fns.start)
                    fns.start(start);
                if (fns.move)
                    fns.move(end, start, start);
                if (fns.end)
                    fns.end(end, start);
            });
        }
    }
    // -----------------------------------------------------------------------------
    // Scroll Events
    function makeScrollEvents($el) {
        // TODO Support removing events.
        if ($el._data['scrollEvents'])
            return;
        $el._data['scrollEvents'] = true;
        let ticking = false;
        let top = undefined;
        function tick() {
            const newTop = $el.scrollTop;
            if (newTop === top) {
                ticking = false;
                return;
            }
            top = newTop;
            $el.trigger('scroll', { top });
            // TODO Scroll should trigger mousemove events.
            window.requestAnimationFrame(tick);
        }
        function scroll() {
            if (!ticking)
                window.requestAnimationFrame(tick);
            ticking = true;
        }
        // Mouse Events
        const target = $el.type === 'window' ? window : $el._el;
        target.addEventListener('scroll', scroll);
        // Touch Events
        function touchStart() {
            window.addEventListener('touchmove', scroll);
            window.addEventListener('touchend', touchEnd);
        }
        function touchEnd() {
            window.removeEventListener('touchmove', scroll);
            window.removeEventListener('touchend', touchEnd);
        }
        $el._el.addEventListener('touchstart', function (e) {
            if (!e.handled)
                touchStart();
        });
    }
    function hover($el, options) {
        const $clickTarget = options.$clickTarget || $el;
        let timeout = 0;
        let active = false;
        let wasTriggeredByMouse = false;
        let wasTriggeredByFocus = false;
        function enter() {
            if (active)
                return;
            if (options.enter)
                options.enter();
            active = true;
        }
        function exit() {
            if (!active)
                return;
            clearTimeout(timeout);
            if (options.exit)
                options.exit();
            active = false;
        }
        $el.on('mouseover', () => {
            if (options.preventMouseover && options.preventMouseover())
                return;
            clearTimeout(timeout);
            timeout = delay(() => {
                enter();
                wasTriggeredByMouse = true;
            }, options.delay);
        });
        $el.on('mouseout', () => {
            if (!wasTriggeredByMouse)
                return;
            clearTimeout(timeout);
            timeout = delay(exit, options.exitDelay || options.delay);
        });
        $clickTarget.on('focus', () => {
            if (active || options.preventMouseover && options.preventMouseover())
                return;
            clearTimeout(timeout);
            enter();
            wasTriggeredByFocus = true;
        });
        const onBlur = () => {
            if (!wasTriggeredByFocus)
                return;
            if (options.canFocusWithin) {
                // Special handling if the blur of the $clickTarget was caused by focussing
                // another child of $el (e.g. e <button> inside a popup).
                // Timeout required so that the new element has focussed.
                setTimeout(() => {
                    const $newActive = Browser.getActiveInput();
                    if ($newActive && $newActive.hasParent($el)) {
                        $newActive.one('blur', onBlur);
                    }
                    else {
                        exit();
                    }
                });
            }
            else {
                exit();
            }
        };
        $clickTarget.on('blur', onBlur);
        $clickTarget.on('click', () => {
            if (active && (!wasTriggeredByMouse)) {
                exit();
            }
            else if (!active) {
                enter();
                wasTriggeredByMouse = false;
            }
        });
        $el.on('clickOutside', () => exit);
    }
    // -----------------------------------------------------------------------------
    // Intersection Events
    let observer;
    function intersectionCallback(entries) {
        for (const e of entries) {
            const event = e.isIntersecting ? 'enterViewport' : 'exitViewport';
            setTimeout(() => $(e.target).trigger(event));
        }
    }
    function makeIntersectionEvents($el) {
        // TODO Support removing events.
        if ($el._data['intersectionEvents'])
            return;
        $el._data['intersectionEvents'] = true;
        // Polyfill for window.IntersectionObserver
        if (!window.IntersectionObserver) {
            let wasVisible = false;
            $body.on('scroll', () => {
                const isVisible = $el.isInViewport;
                if (wasVisible && !isVisible) {
                    $el.trigger('exitViewport');
                    wasVisible = false;
                }
                else if (isVisible && !wasVisible) {
                    $el.trigger('enterViewport');
                    wasVisible = true;
                }
            });
            return;
        }
        if (!observer)
            observer = new IntersectionObserver(intersectionCallback);
        observer.observe($el._el);
    }
    // -----------------------------------------------------------------------------
    // Resize Events
    function makeResizeEvents($el, remove = false) {
        if (remove) {
            if ($el._data['resizeObserver'])
                $el._data['resizeObserver'].disconnect();
            $el._data['resizeObserver'] = undefined;
        }
        if ($el._data['resizeObserver'])
            return;
        if (window.ResizeObserver) {
            const observer = new window.ResizeObserver(() => $el.trigger('resize'));
            observer.observe($el._el);
            $el._data['resizeObserver'] = observer;
        }
        else if (window.MutationObserver) {
            const observer = new MutationObserver(() => $el.trigger('resize'));
            observer.observe($el._el, { attributes: true, childList: true, characterData: true, subtree: true });
            $el._data['resizeObserver'] = observer;
        }
    }
    // -----------------------------------------------------------------------------
    // Pointer Events
    function makePointerPositionEvents($el) {
        // TODO Support removing events.
        if ($el._data['pointerPositionEvents'])
            return;
        $el._data['pointerPositionEvents'] = true;
        const parent = $el.parent;
        let isInside = undefined;
        parent.on('pointerend', () => isInside = undefined);
        parent.on('pointermove', (e) => {
            const wasInside = isInside;
            const target = getEventTarget(e);
            isInside = target.equals($el) || target.hasParent($el);
            if (wasInside != undefined && isInside && !wasInside)
                $el.trigger('pointerenter', e);
            if (!isInside && wasInside)
                $el.trigger('pointerleave', e);
        });
    }
    // -----------------------------------------------------------------------------
    // Mouse Events
    // On touch devices, mouse events are emulated. We don't want that!
    function makeMouseEvent(eventName, $el) {
        // TODO Support removing events.
        if ($el._data['_' + eventName])
            return;
        $el._data['_' + eventName] = true;
        if (pointerSupport) {
            $el.on(eventName.replace('mouse', 'pointer'), (e) => {
                if (e.pointerType === 'mouse')
                    $el.trigger(eventName, e);
            });
        }
        else if (!touchSupport) {
            $el._el.addEventListener(eventName, (e) => $el.trigger(eventName, e));
        }
    }
    // -----------------------------------------------------------------------------
    // Keyboard Events
    function makeKeyEvent($el) {
        // On Android, the keydown event always returns character 229, except for the
        // backspace button which works as expected. Instead, we have to listen to the
        // input event and get the last character of the typed text. Note that this
        // only works if the cursor is at the end, or if the input field gets cleared
        // after every key.
        // Note that e.keyCode is deprecated, but iOS doesn't support e.key yet.
        $el.on('keydown', (e) => {
            if (e.metaKey || e.ctrlKey)
                return;
            if (Browser.isAndroid && e.keyCode === 229)
                return;
            const key = (e.key || String.fromCharCode(e.which)).toLowerCase();
            $el.trigger('key', { code: e.keyCode, key });
        });
        if (Browser.isAndroid && $el.type === 'input') {
            $el.on('input', (e) => {
                const key = e.data[e.data.length - 1].toLowerCase();
                $el.trigger('key', { code: undefined, key });
                $el.value = '';
            });
        }
    }
    // -----------------------------------------------------------------------------
    // Event Creation
    const aliases = {
        scrollwheel: 'DOMMouseScroll mousewheel',
        pointerdown: pointerSupport ? 'pointerdown' :
            touchSupport ? 'touchstart' : 'mousedown',
        pointermove: pointerSupport ? 'pointermove' :
            touchSupport ? 'touchmove' : 'mousemove',
        pointerup: pointerSupport ? 'pointerup' :
            touchSupport ? 'touchend' : 'mouseup',
        pointercancel: pointerSupport ? 'pointercancel' : 'touchcancel',
        pointerstop: pointerSupport ? 'pointerup pointercancel' :
            touchSupport ? 'touchend touchcancel' : 'mouseup'
    };
    const customEvents = {
        scroll: makeScrollEvents,
        tap: makeTapEvent,
        clickOutside: makeClickOutsideEvent,
        key: makeKeyEvent,
        mousedown: makeMouseEvent.bind(undefined, 'mousedown'),
        mousemove: makeMouseEvent.bind(undefined, 'mousemove'),
        mouseup: makeMouseEvent.bind(undefined, 'mouseup'),
        pointerenter: makePointerPositionEvents,
        pointerleave: makePointerPositionEvents,
        enterViewport: makeIntersectionEvents,
        exitViewport: makeIntersectionEvents,
        resize: makeResizeEvents
    };
    function bindEvent($el, event, fn, options) {
        if (event in customEvents) {
            customEvents[event]($el, false);
        }
        else if (event in aliases) {
            const events = words(aliases[event]);
            // Note that the mouse event aliases don't pass through makeMouseEvent()!
            for (const e of events)
                $el._el.addEventListener(e, fn, options);
        }
        else {
            $el._el.addEventListener(event, fn, options);
        }
    }
    function unbindEvent($el, event, fn) {
        if (event in customEvents) {
            if (!$el._events[event] || !$el._events[event].length) {
                // Remove custom events only when there are no more listeners.
                customEvents[event]($el, true);
            }
        }
        else if (fn && event in aliases) {
            const events = words(aliases[event]);
            for (const e of events)
                $el._el.removeEventListener(e, fn);
        }
        else if (fn) {
            $el._el.removeEventListener(event, fn);
        }
    }
    //# sourceMappingURL=events.js.map

    // =============================================================================
    // -----------------------------------------------------------------------------
    // Utility Functions
    /** Draws an arc from a to c, with center b. */
    function drawArc(a, b, c) {
        const orient = b.x * (c.y - a.y) + a.x * (b.y - c.y) + c.x * (a.y - b.y);
        const sweep = (orient > 0) ? 1 : 0;
        const size = Point.distance(b, a);
        return [a.x, a.y + 'A' + size, size, 0, sweep, 1, c.x, c.y].join(',');
    }
    function angleSize(angle, options = {}) {
        if (angle.isRight && !options.round)
            return 20;
        return 24 + 20 * (1 - clamp(angle.rad, 0, Math.PI) / Math.PI);
    }
    function drawAngle(angle, options = {}) {
        let a = angle.a;
        const b = angle.b;
        let c = angle.c;
        const size = options.size || angleSize(angle, options);
        const ba = Point.difference(a, b).unitVector;
        const bc = Point.difference(c, b).unitVector;
        a = Point.sum(b, ba.scale(size));
        c = Point.sum(b, bc.scale(size));
        let p = options.fill ? `M${b.x},${b.y}L` : 'M';
        if (angle.isRight && !options.round) {
            const d = Point.sum(a, bc.scale(size));
            p += `${a.x},${a.y}L${d.x},${d.y}L${c.x},${c.y}`;
        }
        else {
            p += drawArc(a, b, c);
        }
        if (options.fill)
            p += 'Z';
        return p;
    }
    function drawPath(...points) {
        return 'M' + points.map(p => p.x + ',' + p.y).join('L');
    }
    // -----------------------------------------------------------------------------
    // Arrows and Line Marks
    function drawLineMark(x, type) {
        const p = x.perpendicularVector.scale(6);
        const n = x.unitVector.scale(3);
        const m = x.midpoint;
        switch (type) {
            case 'bar':
                return drawPath(m.add(p), m.add(p.inverse));
            case 'bar2':
                return drawPath(m.add(n).add(p), m.add(n).add(p.inverse)) +
                    drawPath(m.add(n.inverse).add(p), m.add(n.inverse).add(p.inverse));
            case 'arrow':
                return drawPath(m.add(n.inverse).add(p), m.add(n), m.add(n.inverse).add(p.inverse));
            case 'arrow2':
                return drawPath(m.add(n.scale(-2)).add(p), m, m.add(n.scale(-2)).add(p.inverse)) +
                    drawPath(m.add(p), m.add(n.scale(2)), m.add(p.inverse));
            default:
                return '';
        }
    }
    function arrowPath(start, normal) {
        if (!start || !normal)
            return '';
        const perp = normal.perpendicular;
        const a = start.add(normal.scale(9)).add(perp.scale(9));
        const b = start.add(normal.scale(9)).add(perp.scale(-9));
        return drawPath(a, start, b);
    }
    function drawLineArrows(x, type) {
        let path = '';
        if (isOneOf(type, 'start', 'both')) {
            path += arrowPath(x.p1, x.unitVector);
        }
        if (isOneOf(type, 'end', 'both')) {
            path += arrowPath(x.p2, x.unitVector.inverse);
        }
        return path;
    }
    function drawArcArrows(x, type) {
        let path = '';
        if (isOneOf(type, 'start', 'both')) {
            const normal = new Line(x.c, x.start).perpendicularVector.inverse;
            path += arrowPath(x.start, normal);
        }
        if (isOneOf(type, 'end', 'both')) {
            const normal = new Line(x.c, x.end).perpendicularVector;
            path += arrowPath(x.end, normal);
        }
        return path;
    }
    // -----------------------------------------------------------------------------
    // Draw Function
    function drawSVG(obj, options = {}) {
        if (obj.type === 'angle') {
            obj = obj;
            return drawAngle(obj, options);
        }
        if (obj.type === 'segment') {
            obj = obj;
            if (obj.p1.equals(obj.p2))
                return '';
            let line = drawPath(obj.p1, obj.p2);
            if (options.mark)
                line += drawLineMark(obj, options.mark);
            if (options.arrows)
                line += drawLineArrows(obj, options.arrows);
            return line;
        }
        if (obj.type === 'ray') {
            obj = obj;
            if (!options.box)
                return '';
            const end = intersections(obj, options.box)[0];
            return end ? drawPath(obj.p1, end) : '';
        }
        if (obj.type === 'line') {
            obj = obj;
            if (!options.box)
                return '';
            const points = intersections(obj, options.box);
            if (points.length < 2)
                return '';
            let line = drawPath(points[0], points[1]);
            if (options.mark)
                line += drawLineMark(obj, options.mark);
            return line;
        }
        if (obj.type === 'circle') {
            obj = obj;
            return `M ${obj.c.x - obj.r} ${obj.c.y} a ${obj.r},${obj.r} 0 1 0 ` +
                `${2 * obj.r} 0 a ${obj.r} ${obj.r} 0 1 0 ${-2 * obj.r} 0`;
        }
        if (obj.type === 'arc') {
            obj = obj;
            let path = 'M' + drawArc(obj.start, obj.c, obj.end);
            if (options.arrows)
                path += drawArcArrows(obj, options.arrows);
            return path;
        }
        if (obj.type === 'sector') {
            obj = obj;
            return `M ${obj.c.x} ${obj.c.y} L ${drawArc(obj.start, obj.c, obj.end)} Z`;
        }
        if (obj.type === 'polyline') {
            obj = obj;
            return drawPath(...obj.points);
        }
        if (obj.type === 'polygon' || obj.type === 'triangle') {
            obj = obj;
            return drawPath(...obj.points) + 'Z';
        }
        if (obj.type === 'rectangle') {
            obj = obj;
            return drawPath(...obj.polygon.points) + 'Z';
        }
        return '';
    }
    // -----------------------------------------------------------------------------
    // Parsing
    const ITEM_SIZE = { C: 6, S: 4, Q: 4, A: 7 };
    const SEGMENTS = /[MmLlCcSsQqTtAa][0-9,.\-\s]+/g;
    const NUMBERS = /-?([0-9]*\.)?[0-9]+/g;
    function parsePath(d) {
        if (!d)
            return [];
        const segments = d.match(SEGMENTS) || [];
        const points = [];
        for (const s of segments) {
            // Space before - sign is not required!
            const items = (s.slice(1).match(NUMBERS) || []).map(x => +x);
            const type = s[0].toUpperCase();
            const isRelative = (type !== s[0]);
            const itemLength = ITEM_SIZE[type] || 2;
            for (let i = 0; i < items.length; i += itemLength) {
                const x = items[i + itemLength - 2];
                const y = items[i + itemLength - 1];
                points.push(isRelative ? last(points).shift(x, y) : new Point(x, y));
            }
        }
        return points;
    }
    //# sourceMappingURL=svg.js.map

    // =============================================================================
    // Boost.js | Canvas Drawing
    // (c) Mathigon
    // =============================================================================
    function drawCanvas(ctx, obj, options = {}) {
        if (options.fill)
            ctx.fillStyle = options.fill;
        if (options.opacity)
            ctx.globalAlpha = options.opacity;
        if (options.stroke) {
            ctx.strokeStyle = options.stroke;
            ctx.lineWidth = options.strokeWidth || 1;
            if (options.lineCap)
                ctx.lineCap = options.lineCap;
            if (options.lineJoin)
                ctx.lineJoin = options.lineJoin;
        }
        ctx.beginPath();
        if (obj.type === 'segment') {
            obj = obj;
            ctx.moveTo(obj.p1.x, obj.p1.y);
            ctx.lineTo(obj.p2.x, obj.p2.y);
        }
        else if (obj.type === 'circle') {
            obj = obj;
            ctx.arc(obj.c.x, obj.c.y, obj.r, 0, 2 * Math.PI);
        }
        else if (obj.type === 'polygon' || obj.type === 'triangle') {
            obj = obj;
            ctx.moveTo(obj.points[0].x, obj.points[0].y);
            for (const p of obj.points.slice(1))
                ctx.lineTo(p.x, p.y);
            ctx.closePath();
        }
        else if (obj.type === 'polyline') {
            obj = obj;
            ctx.moveTo(obj.points[0].x, obj.points[0].y);
            for (const p of obj.points.slice(1))
                ctx.lineTo(p.x, p.y);
        }
        // TODO Support for Line, Ray, Arc, Sector, Angle and Rectangle objects
        if (options.fill)
            ctx.fill();
        if (options.stroke)
            ctx.stroke();
    }
    //# sourceMappingURL=canvas.js.map

    // =============================================================================
    // -----------------------------------------------------------------------------
    // Base Element Class
    class BaseView {
        constructor(_el) {
            this._el = _el;
            this._data = {};
            this._events = {};
            this.type = 'default';
            // Store a reference to this element within the native browser DOM.
            _el._view = this;
        }
        get id() { return this._el.id; }
        get data() { return this._el.dataset; }
        get tagName() {
            return this._el.tagName.toUpperCase();
        }
        equals(el) {
            return this._el === el._el;
        }
        /** Adds one or more space-separated classes to this element. */
        addClass(className) {
            for (const c of words(className))
                this._el.classList.add(c);
        }
        removeClass(className) {
            for (const c of words(className))
                this._el.classList.remove(c);
        }
        hasClass(className) {
            return this._el.classList.contains(className);
        }
        toggleClass(className) {
            return this._el.classList.toggle(className);
        }
        /** Toggles multiple space-separated class names based on a condition. */
        setClass(className, condition) {
            if (condition) {
                this.addClass(className);
            }
            else {
                this.removeClass(className);
            }
        }
        attr(attr) { return this._el.getAttribute(attr) || ''; }
        hasAttr(attr) { return this._el.hasAttribute(attr); }
        setAttr(attr, value) {
            if (value === undefined) {
                this.removeAttr(attr);
            }
            else {
                this._el.setAttribute(attr, value.toString());
            }
        }
        removeAttr(attr) { this._el.removeAttribute(attr); }
        get attributes() {
            // Array.from() converts the NamedNodeMap into an array (for Safari).
            return Array.from(this._el.attributes || []);
        }
        get html() { return this._el.innerHTML || ''; }
        set html(h) { this._el.innerHTML = h; }
        get text() { return this._el.textContent || ''; }
        set text(t) { this._el.textContent = t; }
        // Required because TS doesn't allow getters and setters with different types.
        set textStr(t) { this._el.textContent = '' + t; }
        /** Blurs this DOM element. */
        blur() { this._el.blur(); }
        /** Focuses this DOM element. */
        focus() { this._el.focus(); }
        // -------------------------------------------------------------------------
        // Model Binding
        getParentModel() {
            const parent = this.parent;
            return parent ? (parent.model || parent.getParentModel()) : undefined;
        }
        bindModel(model, recursive = true) {
            var _a;
            if (this.model)
                return; // Prevent duplicate binding.
            this.model = model;
            for (const { name, value } of this.attributes) {
                if (name.startsWith('@')) {
                    const event = name.slice(1);
                    const expr = compile(value);
                    this.removeAttr(name);
                    this.on(event, () => expr(model));
                }
                else if (name === ':show') {
                    const expr = compile(value);
                    this.removeAttr(name);
                    model.watch(() => this.toggle(!!expr(model)));
                }
                else if (name === ':html') {
                    const expr = compile(value);
                    this.removeAttr(name);
                    model.watch(() => this.html = expr(model) || '');
                }
                else if (name === ':draw') {
                    const expr = compile(value);
                    model.watch(() => this.draw(expr(model)));
                }
                else if (name === ':bind') {
                    this.bindVariable(model, value);
                }
                else if (name.startsWith(':')) {
                    const expr = compile(value);
                    const attr = name.slice(1);
                    this.removeAttr(name);
                    model.watch(() => this.setAttr(attr, expr(model)));
                }
                else if (value.includes('${')) {
                    const expr = compileString(value);
                    model.watch(() => this.setAttr(name, expr(model) || ''));
                }
            }
            for (const $c of this.childNodes) {
                if ($c instanceof Text) {
                    if ((_a = $c.textContent) === null || _a === void 0 ? void 0 : _a.includes('${')) {
                        const expr = compileString($c.textContent);
                        model.watch(() => $c.textContent = expr(model) || '');
                    }
                }
                else if (recursive) {
                    $c.bindModel(model);
                }
            }
        }
        bindVariable(model, name) {
            // Can be implemented by child classes.
        }
        // -------------------------------------------------------------------------
        // Scrolling and Dimensions
        get bounds() { return this._el.getBoundingClientRect(); }
        /** Checks if this element is currently visible in the viewport. */
        get isInViewport() {
            if (this.height === 0)
                return false;
            const bounds = this.bounds;
            return isBetween(bounds.top, -bounds.height, Browser.height);
        }
        get topLeftPosition() {
            const bounds = this.bounds;
            return new Point(bounds.left, bounds.top);
        }
        get boxCenter() {
            const box = this.bounds;
            return new Point(box.left + box.width / 2, box.top + box.height / 2);
        }
        get scrollWidth() { return this._el.scrollWidth; }
        get scrollHeight() { return this._el.scrollHeight; }
        get scrollTop() { return this._el.scrollTop; }
        get scrollLeft() { return this._el.scrollLeft; }
        set scrollTop(y) {
            this._el.scrollTop = y;
            this.trigger('scroll', { top: y, left: this.scrollLeft });
        }
        set scrollLeft(x) {
            this._el.scrollLeft = x;
            this.trigger('scroll', { top: this.scrollTop, left: x });
        }
        /** Scrolls the element to a specific position. */
        scrollTo(pos, time = 1000, easing = 'cubic') {
            if (pos < 0)
                pos = 0;
            const startPosition = this.scrollTop;
            const distance = pos - startPosition;
            if (this._data['scrollAnimation'])
                this._data['scrollAnimation'].cancel();
            // TODO Also cancel animation after manual scroll events.
            this._data['scrollAnimation'] = animate(t => {
                const y = startPosition + distance * ease(easing, t);
                this.scrollTop = y;
                this.trigger('scroll', { top: y });
            }, time);
        }
        /** Scrolls the element by a given distance. */
        scrollBy(distance, time = 1000, easing = 'cubic') {
            if (!distance)
                return;
            this.scrollTo(this.scrollTop + distance, time, easing);
        }
        // -------------------------------------------------------------------------
        // Styles
        /**
         * Retrieves or sets CSS properties on this element. Examples:
         *   * $el.css('color');  // returns 'red'
         *   * $el.css('color', 'blue');
         *   * $el.css({color: 'blue'});
         */
        css(props, value) {
            if (value === undefined) {
                if (typeof props === 'string') {
                    return window.getComputedStyle(this._el).getPropertyValue(props);
                }
                else {
                    const keys = Object.keys(props);
                    for (const p of keys)
                        this._el.style.setProperty(p, '' + props[p]);
                }
            }
            else if (typeof props === 'string') {
                this._el.style.setProperty(props, '' + value);
            }
        }
        /** Shortcut for getting the CSS transform style of an element. */
        get transform() {
            return this.css('transform').replace('none', '');
        }
        get transformMatrix() {
            const transform = this.transform;
            if (!transform)
                return [[1, 0, 0], [0, 1, 0]];
            const coords = transform.match(/matrix\(([0-9,.\s\-]*)\)/);
            if (!coords || !coords[1])
                return [[1, 0, 0], [0, 1, 0]];
            const matrix = coords[1].split(',');
            return [[+matrix[0], +matrix[2], +matrix[4]],
                [+matrix[1], +matrix[3], +matrix[5]]];
        }
        /** Finds the x and y scale of this element. */
        get scale() {
            const matrix = this.transformMatrix;
            return [matrix[0][0], matrix[1][1]];
        }
        /** Sets the CSS transform on this element. */
        setTransform(posn, angle = 0, scale = 1) {
            let t = '';
            if (posn)
                t +=
                    `translate(${roundTo(posn.x, 0.1)}px,${roundTo(posn.y, 0.1)}px)`;
            if (angle)
                t += ` rotate(${angle}rad)`;
            if (scale)
                t += ` scale(${scale})`;
            this._el.style.transform = t;
        }
        /** Sets the CSS transform of this element to an x/y translation. */
        translate(x, y) {
            this.setTransform(new Point(x, y));
        }
        /**
         * Makes the element visible. Use the `data-display` attribute to determine
         * how this is done. Possible options are `visibility`, to use CSS visibility,
         * or CSS display values. The default is `display: block`.
         */
        show() {
            if (this.hasAttr('hidden'))
                this.removeAttr('hidden');
            if (this.data['display'] === 'visibility') {
                this._el.style.visibility = 'visible';
            }
            else {
                this._el.style.display = this.data.display || 'block';
            }
        }
        /**
         * Makes the element invisible, using CSS visibility (if
         * `data-display="visibility"`), or `display: none`.
         */
        hide() {
            if (this.data['display'] === 'visibility') {
                this._el.style.visibility = 'hidden';
            }
            else {
                this._el.style.display = 'none';
            }
        }
        /** Hides or shows the element based on a boolean value. */
        toggle(show) {
            if (show) {
                this.show();
            }
            else {
                this.hide();
            }
        }
        // -------------------------------------------------------------------------
        // DOM Manipulation
        /** Checks if an element matches a given CSS selector. */
        is(selector) {
            if (this._el.matches)
                return this._el.matches(selector);
            return Array.from(document.querySelectorAll(selector)).includes(this._el);
        }
        /** Finds the index of an elements, in the list of its siblings. */
        index() {
            let i = 0;
            let child = this._el;
            while ((child = (child.previousSibling || undefined)) !== undefined)
                ++i;
            return i;
        }
        /** Adds a new child element at the beginning of this one. */
        prepend(newChild) {
            const children = this._el.childNodes;
            if (children.length) {
                this._el.insertBefore(newChild._el, children[0]);
            }
            else {
                this._el.appendChild(newChild._el);
            }
        }
        /** Adds a new child element at the end of this one. */
        append(newChild) {
            this._el.appendChild(newChild instanceof Text ? newChild : newChild._el);
        }
        /** Adds a new element immediately before this one, as a sibling. */
        insertBefore(newChild) {
            this.parent._el.insertBefore(newChild._el, this._el);
        }
        /** Adds a new element immediately after this one, as a sibling. */
        insertAfter(newChild) {
            const next = this._el.nextSibling;
            if (next) {
                this.parent._el.insertBefore(newChild._el, next);
            }
            else {
                this.parent._el.appendChild(newChild._el);
            }
        }
        /** Returns this element's next sibling, or undefined. */
        get next() {
            return $(this._el.nextSibling);
        }
        /** Returns this element's previous sibling, or undefined. */
        get prev() {
            return $(this._el.previousSibling);
        }
        /** The first child element matching a given selector. */
        $(selector) { return $(selector, this); }
        /** All child elements matching a given selector. */
        $$(selector) { return $$(selector, this); }
        /** Returns this element's parent, or undefined. */
        get parent() {
            // Note: parentNode breaks on document.matches.
            return $(this._el.parentElement || undefined);
        }
        /** Finds all parent elements that match a specific selector. */
        parents(selector) {
            const result = [];
            let parent = this.parent;
            while (parent) {
                if (!selector || parent.is(selector))
                    result.push(parent);
                parent = parent.parent;
            }
            return result;
        }
        /** Checks if this element has one of the given elements as parent. */
        hasParent(...$p) {
            const tests = $p.map(p => p._el);
            let parent = this._el.parentNode;
            while (parent) {
                if (isOneOf(parent, ...tests))
                    return true;
                parent = parent.parentNode;
            }
            return false;
        }
        /** Returns an array of all children of this element. */
        get children() {
            return Array.from(this._el.children || [], n => $(n));
        }
        /** Returns an array of all child nodes, including text nodes. */
        get childNodes() {
            return Array.from(this._el.childNodes, (node) => {
                return node instanceof Text ? node : $(node);
            });
        }
        /** Removes this element. */
        remove() {
            if (this._el && this._el.parentNode) {
                this._el.parentNode.removeChild(this._el);
            }
            // TODO More cleanup: remove event listeners, clean children, etc.
            // this._el = this._data = this._events = undefined;
        }
        /** Removes all children of this element. */
        removeChildren() {
            while (this._el.firstChild)
                this._el.removeChild(this._el.firstChild);
        }
        // -------------------------------------------------------------------------
        // Events
        /** Binds one ore more space-separated event listeners on this element. */
        on(events, callback, options) {
            for (const e of words(events)) {
                if (e in this._events) {
                    if (!this._events[e].includes(callback))
                        this._events[e].push(callback);
                }
                else {
                    this._events[e] = [callback];
                }
                bindEvent(this, e, callback, options);
            }
        }
        /** Binds a one-time event listener on this element. */
        one(events, callback, options) {
            const callbackWrap = (e) => {
                this.off(events, callbackWrap);
                callback(e);
            };
            this.on(events, callbackWrap, options);
        }
        /**
         * Removes an event listener on this element. If callback is undefined, it
         * removes all event listeners for this event.
         */
        off(events, callback) {
            for (const e of words(events)) {
                if (e in this._events) {
                    this._events[e] = callback ? this._events[e].filter(fn => fn !== callback) : [];
                }
                unbindEvent(this, e, callback);
            }
        }
        /** Triggers a specific event on this element. */
        trigger(events, args = {}) {
            for (const e of words(events)) {
                if (!this._events[e])
                    return;
                for (const fn of this._events[e])
                    fn.call(this, args);
            }
        }
        /**
         * Binds an event listener for a specific key that is pressed while this
         * element is in focus.
         */
        onKeyDown(keys, callback) {
            const keylist = words(keys).map(k => KEY_CODES[k] || k);
            this._el.addEventListener('keydown', (e) => {
                if (keylist.indexOf(e.keyCode) >= 0)
                    callback(e);
            });
        }
        /** Returns a promise that is resolved when an event is triggered. */
        onPromise(event, resolveImmediately = false) {
            if (resolveImmediately)
                return Promise.resolve();
            return new Promise((resolve) => this.one('solve', () => resolve()));
        }
        // -------------------------------------------------------------------------
        // Animations
        /**
         * Animates multiple CSS properties of this element, with a given duration,
         * delay and ease function.
         */
        animate(rules, duration = 400, delay = 0, easing = 'ease-in-out') {
            return transition(this, rules, duration, delay, easing);
        }
        /**
         * Runs an enter animation on this element. Valid effect names are
         *   * 'fade', 'pop' and 'descend'
         *   * 'draw' and 'draw-reverse'
         *   * 'slide' and 'slide-down'
         *   * 'reveal', 'reveal-left' and 'reveal-right'
         */
        enter(effect = 'fade', duration = 500, delay = 0) {
            return enter(this, effect, duration, delay);
        }
        /**
         * Runs an exit animation on this element. See `.enter()` for options.
         */
        exit(effect = 'fade', duration = 500, delay = 0, remove = false) {
            return exit(this, effect, duration, delay, remove);
        }
        /**
         * Triggers a CSS animation in an element by adding a class and removing it
         * after the `animationEnd` event.
         */
        effect(className) {
            this.one('animationend', () => this.removeClass('effects-' + className));
            this.addClass('effects-' + className);
        }
        // -------------------------------------------------------------------------
        // Utilities
        /**
         * Creates a copy of this element.
         * @param {boolean=} recursive
         * @param {boolean=} withStyles Whether to inline all styles.
         * @returns {Element}
         */
        copy(recursive = true, withStyles = true) {
            const $copy = $(this._el.cloneNode(recursive));
            if (withStyles)
                $copy.copyInlineStyles(this, recursive);
            return $copy;
        }
        copyInlineStyles($source, recursive = true) {
            const style = window.getComputedStyle($source._el);
            for (const s of Array.from(style))
                this.css(s, style.getPropertyValue(s));
            if (recursive) {
                const children = this.children;
                const sourceChildren = $source.children;
                for (let i = 0; i < children.length; ++i) {
                    children[i].copyInlineStyles(sourceChildren[i], true);
                }
            }
        }
    }
    // -----------------------------------------------------------------------------
    // HTML Elements
    class HTMLBaseView extends BaseView {
        get offsetTop() { return this._el.offsetTop; }
        get offsetLeft() { return this._el.offsetLeft; }
        get offsetParent() { return $(this._el.offsetParent || undefined); }
        /** Returns this element's width, including border and padding. */
        get width() { return this._el.offsetWidth; }
        /** Returns this element's height, including border and padding. */
        get height() { return this._el.offsetHeight; }
        /** Returns this element's width, excluding border and padding. */
        get innerWidth() {
            const left = parseFloat(this.css('padding-left'));
            const right = parseFloat(this.css('padding-right'));
            return this._el.clientWidth - left - right;
        }
        /** Returns this element's height, excluding border and padding. */
        get innerHeight() {
            const bottom = parseFloat(this.css('padding-bottom'));
            const top = parseFloat(this.css('padding-top'));
            return this._el.clientHeight - bottom - top;
        }
        /** Returns this element's width, including margins. */
        get outerWidth() {
            const left = parseFloat(this.css('margin-left'));
            const right = parseFloat(this.css('margin-right'));
            return (this.width + left + right) || 0;
        }
        /** Returns this element's height, including margins. */
        get outerHeight() {
            const bottom = parseFloat(this.css('margin-bottom'));
            const top = parseFloat(this.css('margin-top'));
            return (this.height + bottom + top) || 0;
        }
        /** @returns {number} */
        get positionTop() {
            let el = this._el;
            let offset = 0;
            while (el) {
                offset += el.offsetTop;
                el = el.offsetParent;
            }
            return offset;
        }
        /** @returns {number} */
        get positionLeft() {
            let el = this._el;
            let offset = 0;
            while (el) {
                offset += el.offsetLeft;
                el = el.offsetParent;
            }
            return offset;
        }
        /** Calculates the element offset relative to any other parent element. */
        offset(parent) {
            if (parent._el === this._el.offsetParent) {
                // Get offset from immediate parent
                const top = this.offsetTop + parent._el.clientTop;
                const left = this.offsetLeft + parent._el.clientLeft;
                const bottom = top + this.height;
                const right = left + this.width;
                return { top, left, bottom, right };
            }
            else {
                // Get offset based on any other element
                const parentBox = parent._el.getBoundingClientRect();
                const box = this._el.getBoundingClientRect();
                return {
                    top: box.top - parentBox.top, left: box.left - parentBox.left,
                    bottom: box.bottom - parentBox.top, right: box.right - parentBox.left
                };
            }
        }
    }
    // -----------------------------------------------------------------------------
    // SVG Elements
    class SVGBaseView extends BaseView {
        constructor() {
            super(...arguments);
            this.type = 'svg';
        }
        /** Returns the owner `<svg>` which this element is a child of. */
        get $ownerSVG() {
            return $(this._el.ownerSVGElement || undefined);
        }
        // See https://www.chromestatus.com/features/5724912467574784
        get width() { return this.bounds.width; }
        get height() { return this.bounds.height; }
        // SVG Elements don't have offset properties. We instead use the position of
        // the first non-SVG parent, plus the margin of the SVG owner, plus the SVG
        // position of the individual element. This doesn't work for absolutely
        // positioned SVG elements, and some other edge cases.
        get positionLeft() {
            const svgLeft = this._el.getBBox().x + this._el.getCTM().e;
            return this.$ownerSVG.positionLeft + svgLeft;
        }
        get positionTop() {
            const svgTop = this._el.getBBox().y + this._el.getCTM().f;
            return this.$ownerSVG.positionTop + svgTop;
        }
        get inverseTransformMatrix() {
            const m = this._el.getScreenCTM().inverse();
            const matrix = [[m.a, m.c, m.e], [m.b, m.d, m.f]];
            // Firefox doesn't account for the CSS transform of parent elements.
            // TODO Use matrix product of all parent's transforms, not just the
            // translation of the immediate parent.
            if (Browser.isFirefox) {
                const transform = this.transformMatrix;
                matrix[0][2] -= transform[0][2];
                matrix[1][2] -= transform[1][2];
            }
            return matrix;
        }
        setTransform(posn, angle = 0, scale = 1) {
            const t1 = posn ?
                `translate(${roundTo(posn.x, 0.1)} ${roundTo(posn.y, 0.1)})` :
                '';
            const t2 = nearlyEquals(angle, 0) ? '' : `rotate(${angle * 180 / Math.PI})`;
            const t3 = nearlyEquals(scale, 1) ? '' : `scale(${scale})`;
            this.setAttr('transform', [t1, t2, t3].join(' '));
        }
        /**
         * Finds the total stroke length of this element. Similar to the SVG
         * `getTotalLength()` function, but works for a wider variety of elements.
         */
        get strokeLength() {
            if (this._el instanceof SVGGeometryElement) {
                return this._el.getTotalLength();
            }
            else {
                const dim = this.bounds;
                return 2 * dim.height + 2 * dim.width;
            }
        }
        /**
         * Gets the coordinates of the point at a distance `d` along the length of the
         * stroke of this `<path>` element.
         */
        getPointAtLength(d) {
            if (this._el instanceof SVGGeometryElement) {
                const point = this._el.getPointAtLength(d);
                return new Point(point.x, point.y);
            }
            else {
                return new Point(0, 0);
            }
        }
        /**
         * Gets the coordinates of the point at a position `p` along the length of the
         * stroke of this `<path>` element, where `0 ≤ p ≤ 1`.
         */
        getPointAt(p) {
            return this.getPointAtLength(p * this.strokeLength);
        }
        /** Returns a list of all points along an SVG `<path>` element. */
        get points() {
            return parsePath(this.attr('d'));
        }
        /** Sets the list of points for an SVG `<path>` element.c*/
        set points(p) {
            const d = p.length ? 'M' + p.map(x => x.x + ',' + x.y).join('L') : '';
            this.setAttr('d', d);
        }
        /** Appends a new point to an SVG `<path>` element. */
        addPoint(p) {
            const d = this.attr('d') + ' L ' + p.x + ',' + p.y;
            this.setAttr('d', d);
        }
        /** Finds the center of an SVG `<circle>` element. */
        get center() {
            const x = +this.attr(this.tagName === 'TEXT' ? 'x' : 'cx');
            const y = +this.attr(this.tagName === 'TEXT' ? 'y' : 'cy');
            return new Point(x, y);
        }
        /** Sets the center of an SVG `<circle>` or `<text>` element. */
        setCenter(c) {
            this.setAttr(this.tagName === 'TEXT' ? 'x' : 'cx', c.x);
            this.setAttr(this.tagName === 'TEXT' ? 'y' : 'cy', c.y);
        }
        /** Sets the end points of an SVG `<line>` element. */
        setLine(p, q) {
            this.setAttr('x1', p.x);
            this.setAttr('y1', p.y);
            this.setAttr('x2', q.x);
            this.setAttr('y2', q.y);
        }
        /** Sets the bounds of an SVG `<rectangle>` element. */
        setRect(rect) {
            this.setAttr('x', rect.p.x);
            this.setAttr('y', rect.p.y);
            this.setAttr('width', rect.w);
            this.setAttr('height', rect.h);
        }
        /** Draws a generic geometry object onto an SVG `<path>` element. */
        draw(obj, options = {}) {
            if (!obj)
                return this.setAttr('d', '');
            const attributes = {
                mark: this.attr('mark'),
                arrows: this.attr('arrows'),
                size: (+this.attr('size')) || undefined,
                fill: this.hasClass('fill'),
                round: this.hasAttr('round')
            };
            this.setAttr('d', drawSVG(obj, applyDefaults(options, attributes)));
        }
    }
    class SVGParentView extends SVGBaseView {
        /** Returns the viewport coordinates of this `<svg>` element. */
        get viewBox() {
            return this._el.viewBox.baseVal || { width: 0, height: 0 };
        }
        get $ownerSVG() {
            return this;
        }
        get positionLeft() {
            return parseInt(this.css('margin-left')) + this.parent.positionLeft;
        }
        get positionTop() {
            return parseInt(this.css('margin-top')) + this.parent.positionTop;
        }
        /** Returns the intrinsic width of this `<svg>` element. */
        get svgWidth() {
            return this.viewBox.width || this.width;
        }
        /** Returns the intrinsic height of this `<svg>` element. */
        get svgHeight() {
            return this.viewBox.height || this.height;
        }
        /** Converts an SVG element into a PNG data URI. */
        pngImage(size) {
            return __awaiter(this, void 0, void 0, function* () {
                const $copy = this.copy(true, true);
                const width = size || this.svgWidth;
                const height = size || this.svgHeight;
                $copy.setAttr('width', width);
                $copy.setAttr('height', height);
                const data = new XMLSerializer().serializeToString($copy._el);
                let url = 'data:image/svg+xml;utf8,' + encodeURIComponent(data);
                url = url.replace('svg ', 'svg xmlns="http://www.w3.org/2000/svg" ');
                // const svgBlob = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
                // const url = window.URL.createObjectURL(svgBlob);
                const $canvas = $N('canvas', { width, height });
                $canvas.ctx.fillStyle = '#fff';
                $canvas.ctx.fillRect(0, 0, width, height);
                const image = yield loadImage(url);
                $canvas.ctx.drawImage(image, 0, 0, width, height);
                return $canvas.pngImage;
                // window.URL.revokeObjectURL(url);
            });
        }
        downloadImage(fileName, size) {
            // iOS Doesn't allow navigation calls within an async event.
            const windowRef = Browser.isIOS ? window.open('', '_blank') : undefined;
            this.pngImage(size).then((href) => {
                if (windowRef)
                    return windowRef.location.href = href;
                const $a = $N('a', { download: fileName, href, target: '_blank' });
                $a._el.dispatchEvent(new MouseEvent('click', { view: window, bubbles: false, cancelable: true }));
            });
        }
    }
    // -----------------------------------------------------------------------------
    // Window Element (<html> and <body>)
    class WindowView extends HTMLBaseView {
        constructor() {
            super(...arguments);
            this.type = 'window';
        }
        get width() { return window.innerWidth; }
        get height() { return window.innerHeight; }
        get innerWidth() { return window.innerWidth; }
        get innerHeight() { return window.innerHeight; }
        get outerWidth() { return window.outerWidth; }
        get outerHeight() { return window.outerHeight; }
        get scrollWidth() { return document.body.scrollWidth; }
        get scrollHeight() { return document.body.scrollHeight; }
        get scrollTop() { return window.pageYOffset; }
        get scrollLeft() { return window.pageXOffset; }
        set scrollTop(y) {
            document.body.scrollTop = document.documentElement.scrollTop = y;
            this.trigger('scroll', { top: y, left: this.scrollLeft });
        }
        set scrollLeft(x) {
            document.body.scrollLeft = document.documentElement.scrollLeft = x;
            this.trigger('scroll', { top: this.scrollTop, left: x });
        }
    }
    class FormView extends HTMLBaseView {
        constructor() {
            super(...arguments);
            this.type = 'form';
        }
        get action() { return this._el.action; }
        /** Summarises the data for an HTML <form> element in an JSON Object. */
        get formData() {
            const data = {};
            for (const el of Array.from(this._el.elements)) {
                const id = el.name || el.id;
                if (id)
                    data[id] = el.value;
            }
            return data;
        }
        get isValid() {
            return this._el.checkValidity();
        }
    }
    class InputView extends HTMLBaseView {
        constructor() {
            super(...arguments);
            this.type = 'input';
        }
        get checked() {
            return this._el instanceof HTMLInputElement ? this._el.checked : false;
        }
        get value() { return this._el.value; }
        set value(v) { this._el.value = v; }
        bindVariable(model, name) {
            model[name] = this.value;
            this.change((v) => model[name] = v);
            model.watch(() => this.value = model[name]);
        }
        /** Binds a change event listener. */
        change(callback) {
            let value = '';
            this.on('change keyup input paste', () => {
                if (this.value === value)
                    return;
                value = this.value.trim();
                callback(value);
            });
        }
        validate(callback) {
            this.change(value => this.setValidity(callback(value)));
        }
        setValidity(str) {
            this._el.setCustomValidity(str);
        }
        get isValid() {
            return this._el.checkValidity();
        }
    }
    // -----------------------------------------------------------------------------
    // Canvas Elements (<canvas>)
    class CanvasView extends HTMLBaseView {
        constructor() {
            super(...arguments);
            this.type = 'canvas';
        }
        /** Returns the drawing context for a `<canvas>` element. */
        getContext(c = '2d', options = {}) {
            return this._el.getContext(c, options);
        }
        /** Converts an Canvas element into a PNG data URI. */
        get pngImage() {
            return this._el.toDataURL('image/png');
        }
        /** Returns the intrinsic pixel width of this `<canvas>` element. */
        get canvasWidth() {
            return this._el.width;
        }
        /** Returns the intrinsic pixel height of this `<canvas>` element. */
        get canvasHeight() {
            return this._el.height;
        }
        /** Cached reference to the 2D context for this `<canvas>` element. */
        get ctx() {
            if (!this._ctx)
                this._ctx = this.getContext();
            return this._ctx;
        }
        /** Draws a generic geometry object ont a `<canvas>` element. */
        draw(obj, options = {}) {
            this.ctx.save();
            drawCanvas(this.ctx, obj, options);
            this.ctx.restore();
        }
        /** Clears this canvas. */
        clear() {
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        }
        /** Clears this canvas. */
        fill(color) {
            this.ctx.save();
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.ctx.restore();
        }
        /** Erase a specific circle of the canvas. */
        clearCircle(center, radius) {
            this.ctx.save();
            this.ctx.globalCompositeOperation = 'destination-out';
            this.ctx.beginPath();
            this.ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
            this.ctx.fill();
            this.ctx.restore();
        }
        downloadImage(fileName) {
            const href = this.pngImage;
            const $a = $N('a', { download: fileName, href, target: '_blank' });
            $a._el.dispatchEvent(new MouseEvent('click', { view: window, bubbles: false, cancelable: true }));
        }
    }
    // -----------------------------------------------------------------------------
    // Media Elements (<video> and <audio>)
    class MediaView extends HTMLBaseView {
        /** Starts playback on a media element. */
        play() {
            return this._el.play() || Promise.resolve();
        }
        /** Pauses playback on a media element. */
        pause() {
            return this._el.pause();
        }
    }
    // -----------------------------------------------------------------------------
    // Element Selectors and Constructors
    const SVG_TAGS = ['path', 'rect', 'circle', 'ellipse', 'polygon', 'polyline',
        'g', 'defs', 'marker', 'line', 'text', 'pattern', 'mask', 'svg', 'foreignObject'];
    /**
     * Finds the Element that matches a specific CSS selector, or creates a new
     * Element wrapper around a native HTMLElement instance.
     */
    function $(query, context) {
        if (!query)
            return undefined;
        const c = context ? context._el : document.documentElement;
        const el = (typeof query === 'string') ? c.querySelector(query) : query;
        if (!el)
            return undefined;
        if (el._view)
            return el._view;
        const tagName = (el.tagName || '').toLowerCase();
        if (tagName === 'svg') {
            return new SVGParentView(el);
        }
        else if (tagName === 'canvas') {
            return new CanvasView(el);
        }
        else if (tagName === 'form') {
            return new FormView(el);
        }
        else if (tagName === 'input' || tagName === 'select' || tagName === 'textarea') {
            return new InputView(el);
        }
        else if (tagName === 'video' || tagName === 'audio') {
            return new MediaView(el);
        }
        else if (SVG_TAGS.includes(tagName)) {
            // TODO <mask> and <pattern> are not SVGGraphicsElements.
            return new SVGBaseView(el);
        }
        else {
            return new HTMLBaseView(el);
        }
    }
    /** Finds all elements that match a specific CSS selector. */
    function $$(selector, context) {
        const c = context ? context._el : document.documentElement;
        const els = selector ? c.querySelectorAll(selector) : [];
        return Array.from(els, el => $(el));
    }
    /** Creates a new Element instance from a given set of options. */
    function $N(tag, attributes = {}, parent) {
        const el = !SVG_TAGS.includes(tag) ? document.createElement(tag) :
            document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (const [key, value] of Object.entries(attributes)) {
            if (value === undefined)
                continue;
            if (key === 'id') {
                el.id = value;
            }
            else if (key === 'html') {
                el.innerHTML = value;
            }
            else if (key === 'text') {
                el.textContent = value;
            }
            else if (key === 'path') {
                el.setAttribute('d', drawSVG(value));
            }
            else {
                el.setAttribute(key, value);
            }
        }
        const $el = $(el);
        if (parent)
            parent.append($el);
        return $el;
    }
    const $body = new WindowView(document.body);
    const $html = new WindowView(document.documentElement);
    //# sourceMappingURL=elements.js.map

    // =============================================================================
    const KEY_CODES = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        pause: 19,
        capslock: 20,
        escape: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        'delete': 46
    };
    // -----------------------------------------------------------------------------
    // Browser Namespace
    var Browser;
    (function (Browser) {
        const ua = window.navigator.userAgent.toLowerCase();
        Browser.isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
        Browser.isRetina = ((window.devicePixelRatio || 1) > 1);
        Browser.isTouch = (!!window.Touch) || 'ontouchstart' in window;
        Browser.isChrome = !!window.chrome;
        Browser.isFirefox = ua.indexOf('firefox') >= 0;
        Browser.isAndroid = ua.indexOf('android') >= 0;
        Browser.isIOS = /iphone|ipad|ipod/i.test(ua);
        Browser.isSafari = /^((?!chrome|android).)*safari/i.test(ua);
        /** Forces a re-paint. This is useful when updating transition properties. */
        function redraw() {
            document.body.offsetHeight; /* jshint ignore:line */
        }
        Browser.redraw = redraw;
        // ---------------------------------------------------------------------------
        // Load Events
        const loadQueue = [];
        let loaded = false;
        function afterLoad() {
            if (loaded)
                return;
            loaded = true;
            for (const fn of loadQueue)
                fn();
            setTimeout(resize);
        }
        window.onload = afterLoad;
        document.addEventListener('DOMContentLoaded', afterLoad);
        /** Binds an event listener that is triggered when the page is loaded. */
        function ready(fn) {
            if (loaded) {
                fn();
            }
            else {
                loadQueue.push(fn);
            }
        }
        Browser.ready = ready;
        const resizeCallbacks = [];
        Browser.width = window.innerWidth;
        Browser.height = window.innerHeight;
        const doResize = throttle(() => {
            Browser.width = window.innerWidth;
            Browser.height = window.innerHeight;
            for (const fn of resizeCallbacks)
                fn({ width: Browser.width, height: Browser.height });
            $body.trigger('scroll', { top: $body.scrollTop });
        });
        function onResize(fn) {
            fn({ width: Browser.width, height: Browser.height });
            resizeCallbacks.push(fn);
        }
        Browser.onResize = onResize;
        function offResize(fn) {
            const i = resizeCallbacks.indexOf(fn);
            if (i >= 0)
                resizeCallbacks.splice(i, 1);
        }
        Browser.offResize = offResize;
        function resize() {
            doResize();
        }
        Browser.resize = resize;
        window.addEventListener('resize', () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            if (Browser.width === newWidth && Browser.height === newHeight)
                return;
            Browser.width = newWidth;
            Browser.height = newHeight;
            doResize();
        });
        // ---------------------------------------------------------------------------
        // Location Hash
        /** Returns the hash string of the current window. */
        function getHash() {
            return window.location.hash.slice(1);
        }
        Browser.getHash = getHash;
        /** Set the hash string of the current window. */
        function setHash(h) {
            // Prevent scroll to top when resetting hash.
            const scroll = document.body.scrollTop;
            window.location.hash = h;
            document.body.scrollTop = scroll;
        }
        Browser.setHash = setHash;
        // ---------------------------------------------------------------------------
        // Cookies
        /** Returns a JSON object of all cookies. */
        function getCookies() {
            const pairs = document.cookie.split(';');
            const result = {};
            for (let i = 0, n = pairs.length; i < n; ++i) {
                const pair = pairs[i].split('=');
                pair[0] = pair[0].replace(/^\s+|\s+$/, '');
                result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
            return result;
        }
        Browser.getCookies = getCookies;
        function getCookie(name) {
            const v = document.cookie.match(new RegExp(`(^|;) ?${name}=([^;]*)(;|$)`));
            return v ? v[2] : undefined;
        }
        Browser.getCookie = getCookie;
        function setCookie(name, value, maxAge = 60 * 60 * 24 * 365) {
            // Cookies are also set for all subdomains. Remove locale subdomains.
            const domain = window.location.hostname.replace(/^[a-z]{2}\./, '');
            document.cookie = `${name}=${value};path=/;max-age=${maxAge};domain=${domain}`;
        }
        Browser.setCookie = setCookie;
        function deleteCookie(name) {
            setCookie(name, '', -1);
        }
        Browser.deleteCookie = deleteCookie;
        // ---------------------------------------------------------------------------
        // Local Storage
        const STORAGE_KEY = '_M';
        function setStorage(key, value) {
            const keys = (key || '').split('.');
            const storage = safeToJSON(window.localStorage.getItem(STORAGE_KEY) || undefined);
            let path = storage;
            for (let i = 0; i < keys.length - 1; ++i) {
                if (path[keys[i]] == undefined)
                    path[keys[i]] = {};
                path = path[keys[i]];
            }
            path[keys[keys.length - 1]] = value;
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
        }
        Browser.setStorage = setStorage;
        function getStorage(key) {
            let path = safeToJSON(window.localStorage.getItem(STORAGE_KEY) || undefined);
            if (!key)
                return path;
            const keys = (key || '').split('.');
            const lastKey = keys.pop();
            for (const k of keys) {
                if (!(k in path))
                    return undefined;
                path = path[k];
            }
            return path[lastKey];
        }
        Browser.getStorage = getStorage;
        function deleteStorage(key) {
            if (key) {
                setStorage(key, undefined);
            }
            else {
                window.localStorage.setItem(STORAGE_KEY, '');
            }
        }
        Browser.deleteStorage = deleteStorage;
        // ---------------------------------------------------------------------------
        // Keyboard Event Handling
        /** The current active element on the page (e.g. and `<input>`). */
        function getActiveInput() {
            const active = document.activeElement;
            return active === document.body ? undefined : $(active);
        }
        Browser.getActiveInput = getActiveInput;
        /** Binds an event listener that is fired when a key is pressed. */
        function onKey(keys, fn, up = false) {
            const keyNames = words(keys);
            const keyCodes = keyNames.map(k => KEY_CODES[k] || k);
            const event = up ? 'keyup' : 'keydown';
            document.addEventListener(event, function (e) {
                const $active = getActiveInput();
                if ($active && ($active.is('input, textarea, [contenteditable]') ||
                    $active.hasAttr('tabindex')))
                    return;
                const i = keyCodes.findIndex(k => e.keyCode === k || e.key === k);
                if (i >= 0)
                    fn(e, keyNames[i]);
            });
        }
        Browser.onKey = onKey;
    })(Browser || (Browser = {}));
    // -----------------------------------------------------------------------------
    // Polyfill for external SVG imports
    const IEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/;
    const webkitUA = /\bAppleWebKit\/(\d+)\b/;
    const EdgeUA = /\bEdge\/12\.(\d+)\b/;
    const polyfill = IEUA.test(navigator.userAgent) ||
        +(navigator.userAgent.match(EdgeUA) || [])[1] < 10547 ||
        +(navigator.userAgent.match(webkitUA) || [])[1] < 537;
    const requests = {};
    /** Replaces SVG `<use>` imports that are not supported by older browsers. */
    function replaceSvgImports() {
        if (!polyfill)
            return;
        const uses = Array.from(document.querySelectorAll('svg > use'));
        uses.forEach(function (use) {
            const src = use.getAttribute('xlink:href');
            const [url, id] = src.split('#');
            if (!url.length || !id)
                return;
            const svg = use.parentNode;
            svg.removeChild(use);
            if (!(url in requests))
                requests[url] = fetch(url).then(r => r.text());
            const request = requests[url];
            request.then((response) => {
                const doc = document.implementation.createHTMLDocument('');
                doc.documentElement.innerHTML = response;
                const icon = doc.getElementById(id);
                const clone = icon.cloneNode(true);
                const fragment = document.createDocumentFragment();
                while (clone.childNodes.length)
                    fragment.appendChild(clone.firstChild);
                svg.appendChild(fragment);
            });
        });
    }
    //# sourceMappingURL=browser.js.map

    // =============================================================================
    // Prevent animations on page load.
    let isReady = false;
    setTimeout(() => isReady = true);
    const BOUNCE_IN = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    const BOUNCE_OUT = 'cubic-bezier(0.68, -0.275, 0.825, 0.115)';
    const ResolvedAnimation = { cancel: () => { }, promise: Promise.resolve() };
    /**
     * Runs an animation. If no duration is provided, the animation will run
     * indefinitely, and call `callback` with the time since start as first
     * argument. If a duration is provided, the first callback argument is instead
     * the proportion of the duration passed (between 0 and 1). The second callback
     * argument is the time difference since the last animation frame, and the
     * third callback argument is a `cancel()` function to stop the animation.
     */
    function animate(callback, duration) {
        if (duration === 0) {
            callback(1, 0, () => { });
            return ResolvedAnimation;
        }
        const startTime = Date.now();
        const deferred = defer();
        let lastTime = 0;
        let running = true;
        const cancel = () => {
            running = false;
            deferred.reject();
        };
        function getFrame() {
            if (running && (!duration || lastTime <= duration))
                window.requestAnimationFrame(getFrame);
            const time = Date.now() - startTime;
            callback(duration ? Math.min(1, time / duration) : time, time - lastTime, cancel);
            if (duration && time >= duration)
                deferred.resolve();
            lastTime = time;
        }
        getFrame();
        return { cancel, promise: deferred.promise };
    }
    // -----------------------------------------------------------------------------
    // Easing
    function easeIn(type, t = 0, s = 0) {
        switch (type) {
            case 'quad':
                return t ** 2;
            case 'cubic':
                return t ** 3;
            case 'quart':
                return t ** 4;
            case 'quint':
                return t ** 5;
            case 'circ':
                return 1 - Math.sqrt(1 - t ** 2);
            case 'sine':
                return 1 - Math.cos(t * Math.PI / 2);
            case 'exp':
                return (t <= 0) ? 0 : Math.pow(2, 10 * (t - 1));
            case 'back':
                if (!s)
                    s = 1.70158;
                return t * t * ((s + 1) * t - s);
            case 'elastic':
                if (!s)
                    s = 0.3;
                return -Math.pow(2, 10 * (t - 1)) *
                    Math.sin(((t - 1) * 2 / s - 0.5) * Math.PI);
            case 'swing':
                return 0.5 - Math.cos(t * Math.PI) / 2;
            case 'spring':
                return 1 - (Math.cos(t * 4.5 * Math.PI) * Math.exp(-t * 6));
            case 'bounce':
                if (t < 1 / 11)
                    return 1 / 64 - 7.5625 * (0.5 / 11 - t) * (0.5 / 11 - t); // 121/16 = 7.5625
                if (t < 3 / 11)
                    return 1 / 16 - 7.5625 * (2 / 11 - t) * (2 / 11 - t);
                if (t < 7 / 11)
                    return 1 / 4 - 7.5625 * (5 / 11 - t) * (5 / 11 - t);
                return 1 - 7.5625 * (1 - t) * (1 - t);
            default:
                return t;
        }
    }
    /**
     * Applies an easing function to a number `t` between 0 and 1. Options include
     * `quad`, `cubic`, `quart`, `quint`, `circ`, `sine`, `exp`, `back`, `elastic`,
     * `swing`, `spring` and `bounce`, optionally followed by `-in` or `-out`. The
     * `s` parameter is only used by `back` and `elastic` easing.
     */
    function ease(type, t = 0, s = 0) {
        if (t === 0)
            return 0;
        if (t === 1)
            return 1;
        const [name, direction] = type.split('-');
        if (direction === 'in')
            return easeIn(name, t, s);
        if (direction === 'out')
            return 1 - easeIn(name, 1 - t, s);
        if (t <= 0.5)
            return easeIn(name, 2 * t, s) / 2;
        return 1 - easeIn(name, 2 * (1 - t), s) / 2;
    }
    function transition($el, properties, duration = 400, _delay = 0, easing = 'ease-in-out') {
        // Don't play animations while the page is loading.
        if (!isReady) {
            Object.keys(properties).forEach(k => {
                const p = properties[k];
                $el.css(k, Array.isArray(p) ? p[1] : p);
            });
            return ResolvedAnimation;
        }
        if (easing === 'bounce-in')
            easing = BOUNCE_IN;
        if (easing === 'bounce-out')
            easing = BOUNCE_OUT;
        let oldTransition = '';
        if (Browser.isSafari) {
            oldTransition = $el._el.style.transition;
            $el.css('transition', 'none');
            Browser.redraw();
        }
        // Cancel any previous animations
        const currentAnimation = $el._data['animation'];
        if (currentAnimation)
            currentAnimation.cancel();
        const to = {}, from = {};
        const deferred = defer();
        const style = window.getComputedStyle($el._el);
        Object.keys(properties).forEach((k) => {
            const p = properties[k];
            const k1 = toCamelCase(k);
            from[k1] = Array.isArray(p) ? p[0] : style.getPropertyValue(k);
            to[k1] = Array.isArray(p) ? p[1] : p;
            // Set initial style, for the duration of the delay.
            if (_delay)
                $el.css(k, from[k1]);
        });
        // Special rules for animations to height: auto
        const oldHeight = to.height;
        if (to.height === 'auto') {
            to.height =
                total($el.children.map($c => $c.outerHeight)) + 'px';
        }
        let player;
        let cancelled = false;
        delay(() => {
            if (cancelled)
                return;
            player = $el._el.animate([from, to], { duration, easing, fill: 'forwards' });
            player.onfinish = () => {
                if ($el._el)
                    Object.keys(properties)
                        .forEach(k => $el.css(k, k === 'height' ? oldHeight : to[k]));
                if (Browser.isSafari)
                    $el.css('transition', oldTransition);
                deferred.resolve();
                player.cancel(); // bit ugly, but needed for Safari...
            };
        }, _delay);
        const animation = {
            cancel() {
                cancelled = true;
                if ($el._el)
                    Object.keys(properties).forEach(k => $el.css(k, $el.css(k)));
                if (player)
                    player.cancel();
            },
            promise: deferred.promise
        };
        // Only allow cancelling of animation in next thread.
        setTimeout(() => $el._data['animation'] = animation);
        return animation;
    }
    // -----------------------------------------------------------------------------
    // Element CSS Animations Effects
    // When applying the 'pop' effect, we want to respect all existing transform
    // except scale. To do that, we have to expand the matrix() notation.
    const CSS_MATRIX = /matrix\([0-9.\-\s]+,[0-9.\-\s]+,[0-9.\-\s]+,[0-9.\-\s]+,([0-9.\-\s]+),([0-9.\-\s]+)\)/;
    function enter($el, effect = 'fade', duration = 500, _delay = 0) {
        $el.show();
        if (!isReady)
            return ResolvedAnimation;
        const opacity = (+$el.css('opacity')) || 1;
        if (effect === 'fade') {
            return transition($el, { opacity: [0, opacity] }, duration, _delay);
        }
        else if (effect === 'pop') {
            const transform = $el.transform.replace(/scale\([0-9.]*\)/, '')
                .replace(CSS_MATRIX, 'translate($1px,$2px)');
            // TODO Merge into one transition.
            transition($el, { opacity: [0, opacity] }, duration, _delay);
            return transition($el, {
                transform: [transform + ' scale(0.5)',
                    transform + ' scale(1)']
            }, duration, _delay, 'bounce-in');
        }
        else if (effect === 'descend') {
            const rules = { opacity: [0, 1], transform: ['translateY(-50%)', 'none'] };
            return transition($el, rules, duration, _delay);
        }
        else if (effect.startsWith('draw')) {
            const l = $el.strokeLength;
            $el.css('stroke-dasharray', l + 'px');
            if (!$el.css('opacity'))
                $el.css('opacity', 1);
            // Note that Safari can't handle negative dash offsets!
            const end = (effect === 'draw-reverse') ? 2 * l + 'px' : 0;
            const rules = { 'stroke-dashoffset': [l + 'px', end] };
            const animation = transition($el, rules, duration, _delay, 'linear');
            animation.promise.then(() => $el.css('stroke-dasharray', ''));
            return animation;
        }
        else if (effect.startsWith('slide')) {
            const rules = { opacity: [0, opacity], transform: ['translateY(50px)', 'none'] };
            if (effect.includes('down'))
                rules.transform[0] = 'translateY(-50px)';
            if (effect.includes('right'))
                rules.transform[0] = 'translateX(-50px)';
            if (effect.includes('left'))
                rules.transform[0] = 'translateX(50px)';
            return transition($el, rules, duration, _delay);
        }
        else if (effect.startsWith('reveal')) {
            const rules = { opacity: [0, opacity], height: [0, 'auto'] };
            if (effect.includes('left'))
                rules.transform = ['translateX(-50%)', 'none'];
            if (effect.includes('right'))
                rules.transform = ['translateX(50%)', 'none'];
            return transition($el, rules, duration, _delay);
        }
        return ResolvedAnimation;
    }
    function exit($el, effect = 'fade', duration = 400, delay = 0, remove = false) {
        if (!$el._el)
            return ResolvedAnimation;
        if (!isReady) {
            $el.hide();
            return ResolvedAnimation;
        }
        if ($el.css('display') === 'none')
            return ResolvedAnimation;
        let animation;
        if (effect === 'fade') {
            animation = transition($el, { opacity: [1, 0] }, duration, delay);
        }
        else if (effect === 'pop') {
            const transform = $el.transform.replace(/scale\([0-9.]*\)/, '');
            transition($el, { opacity: [1, 0] }, duration, delay);
            animation = transition($el, {
                transform: [transform + ' scale(1)',
                    transform + ' scale(0.5)']
            }, duration, delay, 'bounce-out');
        }
        else if (effect === 'ascend') {
            const rules = { opacity: [1, 0], transform: ['none', 'translateY(-50%)'] };
            animation = transition($el, rules, duration, delay);
        }
        else if (effect.startsWith('draw')) {
            const l = $el.strokeLength;
            $el.css('stroke-dasharray', l);
            const start = (effect === 'draw-reverse') ? 2 * l + 'px' : 0;
            const rules = { 'stroke-dashoffset': [start, l + 'px'] };
            animation = transition($el, rules, duration, delay, 'linear');
        }
        else if (effect.startsWith('slide')) {
            const rules = { opacity: 0, transform: 'translateY(50px)' };
            if (effect.includes('up'))
                rules.transform = 'translateY(-50px)';
            animation = transition($el, rules, duration, delay);
        }
        else if (effect.startsWith('reveal')) {
            const rules = { opacity: 0, height: 0 };
            if (effect.includes('left'))
                rules.transform = 'translateX(-50%)';
            if (effect.includes('right'))
                rules.transform = 'translateX(50%)';
            animation = transition($el, rules, duration, delay);
        }
        animation.promise.then(() => remove ? $el.remove() : $el.hide());
        return animation;
    }
    //# sourceMappingURL=animate.js.map

    // =============================================================================
    function getViewParams(url, view) {
        const match = view.regex.exec(url);
        if (match) {
            match.shift();
            const params = {};
            for (const [i, p] of view.params.entries())
                params[p] = match[i];
            return params;
        }
        else {
            return undefined;
        }
    }
    function getTemplate(view, params, url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (view.template) {
                if (typeof view.template === 'string')
                    return view.template;
                return view.template(params);
            }
            // Append a query string to only load the body of the page, not the header.
            const str = yield fetch(url + (url.indexOf('?') >= 0 ? '&xhr=1' : '?xhr=1'));
            return str.text();
        });
    }
    // Don't trigger Router events during the initial Page load.
    let isReady$1 = (document.readyState === 'complete');
    window.addEventListener('load', () => setTimeout(() => isReady$1 = true));
    // Prevent scroll restoration on popstate
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }
    // -----------------------------------------------------------------------------
    // Router Cla
    class Router extends EventTarget {
        constructor() {
            super(...arguments);
            this.$viewport = $body;
            this.views = [];
            this.active = { path: '', hash: '', index: 0 };
            this.search = window.location.search;
            this.preloaded = false;
            this.transition = false;
            this.noLoad = false;
            this.initialise = () => { };
        }
        setup(options = {}) {
            if (options.$viewport)
                this.$viewport = options.$viewport;
            if (options.initialise)
                this.initialise = options.initialise;
            if (options.preloaded)
                this.preloaded = options.preloaded;
            if (options.transition)
                this.transition = options.transition;
            if (options.noLoad)
                this.noLoad = options.noLoad;
            if (options.click) {
                $body.on('click', (e) => this.onLinkClick(e));
            }
            if (options.history) {
                window.addEventListener('popstate', (e) => {
                    if (isReady$1 && e.state)
                        this.goToState(e.state);
                });
            }
        }
        view(url, { enter, exit, template } = {}) {
            // TODO Error on multiple matching views
            const params = (url.match(/:\w+/g) || []).map(x => x.substr(1));
            const regexStr = url.replace(/:\w+/g, '([\\w-]+)').replace('/', '\\/') +
                '\\/?';
            const searchStr = url.includes('?') ? '' : '(\\?.*)?';
            const regex = new RegExp('^' + regexStr + searchStr + '$', 'i');
            const thisView = { regex, params, enter, exit, template };
            this.views.push(thisView);
            const viewParams = getViewParams(window.location.pathname, thisView);
            if (!viewParams)
                return;
            this.active = {
                path: window.location.pathname + this.search,
                hash: window.location.hash,
                index: 0
            };
            window.history.replaceState(this.active, '', this.active.path + this.active.hash);
            // The wrappers fix stupid Firefox, which doesn't seem to take its time
            // triggering .createdCallbacks for web components...
            Browser.ready(() => {
                setTimeout(() => {
                    if (this.preloaded) {
                        this.initialise(this.$viewport, viewParams);
                        if (thisView.enter)
                            thisView.enter(this.$viewport, viewParams);
                    }
                    else {
                        this.loadView(thisView, viewParams, window.location.pathname);
                    }
                });
            });
        }
        paths(...urls) {
            for (const url of urls)
                this.view(url);
        }
        getView(path) {
            for (const view of this.views) {
                const params = getViewParams(path, view);
                if (params)
                    return { view, params };
            }
        }
        // ---------------------------------------------------------------------------
        // Loading and Rendering
        load(path, hash = '') {
            const go = this.getView(path);
            if (path === this.active.path && hash !== this.active.hash) {
                this.trigger('hashChange', hash.slice(1));
                this.trigger('change', path + hash);
                return true;
            }
            else if (go && path !== this.active.path) {
                this.trigger('change', path + hash);
                if (window.ga)
                    window.ga('send', 'pageview', path + hash);
                if (this.noLoad) {
                    if (go.view.enter)
                        go.view.enter(this.$viewport, go.params);
                }
                else {
                    this.loadView(go.view, go.params, path);
                }
                return true;
            }
            else {
                return false;
            }
        }
        loadView(view, params = {}, url = '') {
            return __awaiter(this, void 0, void 0, function* () {
                this.$viewport.css({ opacity: 0.4, 'pointer-events': 'none' });
                const template = yield getTemplate(view, params, url);
                this.$viewport.css('opacity', 0);
                setTimeout(() => {
                    this.$viewport.removeChildren();
                    // TODO Remove all event listeners in $viewport, to avoid memory leaks.
                    $body.scrollTop = 0;
                    this.$viewport.html = template;
                    Browser.resize();
                    replaceSvgImports();
                    this.$viewport.css({ opacity: 1, 'pointer-events': 'all' });
                    const $title = this.$viewport.$('title');
                    if ($title)
                        document.title = $title.text;
                    this.initialise(this.$viewport, params);
                    if (view.enter)
                        view.enter(this.$viewport, params);
                    this.trigger('afterChange', { $viewport: this.$viewport });
                }, 350);
            });
        }
        // ---------------------------------------------------------------------------
        // Navigation Functions
        onLinkClick(e) {
            if (e.metaKey || e.ctrlKey || e.shiftKey)
                return;
            if (e.defaultPrevented)
                return;
            let el = e.target;
            while (el && el.nodeName !== 'A')
                el = el.parentNode;
            if (!el || el.nodeName !== 'A')
                return;
            const anchor = el;
            // Check target
            if (anchor.target)
                return;
            // Different origin
            if (anchor.origin !== window.location.origin)
                return;
            // Ignore if tag has "download" attribute or rel="external" attribute
            if (anchor.hasAttribute('download') || anchor.getAttribute('rel') ===
                'external')
                return;
            // Check for mailto: in the href
            const link = anchor.getAttribute('href');
            if (link && link.indexOf('mailto:') > -1)
                return;
            const success = this.goTo(anchor.pathname + anchor.search, anchor.hash);
            if (success)
                e.preventDefault();
        }
        goToState(state) {
            if (!state || !state.path)
                return;
            const change = this.load(state.path + this.search, state.hash);
            if (change && state.index < this.active.index)
                this.trigger('back');
            if (change && state.index > this.active.index)
                this.trigger('forward');
            this.active = state;
        }
        goTo(path, hash = '') {
            const success = this.load(path, hash);
            if (success) {
                const index = (this.active ? this.active.index + 1 : 0);
                this.active = { path, hash, index };
                window.history.pushState(this.active, '', path + hash);
            }
            return success;
        }
        back() { window.history.back(); }
        forward() { window.history.forward(); }
    }
    const RouterInstance = new Router();
    //# sourceMappingURL=router.js.map

    // =============================================================================
    // -----------------------------------------------------------------------------
    // Utility Functions
    function applyTemplate(el, options) {
        // Array.from() is required to break the reference to the original parent.
        const children = Array.from(el.childNodes);
        if (options.template) {
            el.innerHTML = options.template;
        }
        else if (options.templateId) {
            const template = document.querySelector(options.templateId);
            if (!template)
                throw new Error(`Template not found: ${options.templateId}`);
            while (el.firstChild)
                el.removeChild(el.firstChild);
            const content = template.content;
            const clone = document.importNode(content, true);
            el.appendChild(clone);
        }
        if (!children.length)
            return;
        const defaultSlot = el.querySelector('slot:not([name])');
        for (const child of children) {
            const name = child.getAttribute ? child.getAttribute('slot') : undefined;
            const slot = name ? el.querySelector(`slot[name="${name}"]`) : defaultSlot;
            if (slot)
                slot.parentNode.insertBefore(child, slot);
        }
        for (const slot of Array.from(el.querySelectorAll('slot'))) {
            slot.parentNode.removeChild(slot);
        }
    }
    function customElementChildren(el) {
        const result = [];
        for (const c of Array.from(el.children)) {
            if (c.tagName.startsWith('X-')) {
                result.push(c);
            }
            else {
                result.push(...customElementChildren(c));
            }
        }
        return result;
    }
    // -----------------------------------------------------------------------------
    // Custom Element Classes
    const customElementOptions = new Map();
    class CustomHTMLElement extends HTMLElement {
        constructor() {
            super(...arguments);
            this.wasConnected = false;
            this.isReady = false;
        }
        connectedCallback() {
            return __awaiter(this, void 0, void 0, function* () {
                // The element setup is done when it is first attached to the dom. We have
                // to guard against this running more than once.
                if (this.wasConnected) {
                    // TODO Bind the model of the new parent.
                    this._view.trigger('connected');
                    return;
                }
                this.wasConnected = true;
                this.isReady = false;
                this._view.created();
                const options = customElementOptions.get(this._view.tagName) || {};
                // Bind Component Template
                if (options.template || options.templateId)
                    applyTemplate(this, options);
                // Select all unresolved custom element children
                // TODO improve performance and fix ordering
                const promises = customElementChildren(this)
                    .filter(c => !c.isReady)
                    .map(c => new Promise(res => c.addEventListener('ready', res)));
                yield Promise.all(promises);
                this._view.ready();
                this.dispatchEvent(new CustomEvent('ready'));
                this.isReady = true;
            });
        }
        disconnectedCallback() {
            this._view.trigger('disconnected');
        }
        attributeChangedCallback(attrName, oldVal, newVal) {
            this._view.trigger('attr:' + attrName, { newVal, oldVal });
        }
    }
    /**
     * Base class for custom HTML elements. In addition to other custom methods,
     * it can implement `created()` and `ready()` methods that are executed during
     * the element lifecycle.
     */
    class CustomElementView extends HTMLBaseView {
        created() { }
        ready() { }
    }
    /**
     * Decorator for registering a new custom HTML element.
     */
    function register(tagName, options = {}) {
        return function (ElementClass) {
            // Every class can only be used once as custom element,
            // so we have to make a copy.
            class Constructor extends CustomHTMLElement {
                constructor() {
                    super();
                    this._view = new ElementClass(this);
                }
            }
            Constructor.observedAttributes = options.attributes || [];
            customElementOptions.set(tagName.toUpperCase(), options);
            window.customElements.define(tagName, Constructor);
        };
    }
    //# sourceMappingURL=webcomponents.js.map

    // =============================================================================
    // Hilbert.js | Expression Errors
    // (c) Mathigon
    // =============================================================================
    /** Expression Error Class */
    class ExprError extends Error {
        constructor(name, message) {
            super(message);
            this.name = name;
        }
        // ---------------------------------------------------------------------------
        // Eval Errors
        static undefinedVariable(x) {
            return new ExprError('EvalError', `Undefined variable “${x}”.`);
        }
        static undefinedFunction(x) {
            return new ExprError('EvalError', `Undefined function “${x}”.`);
        }
        // ---------------------------------------------------------------------------
        // Syntax Errors
        static invalidCharacter(x) {
            return new ExprError('SyntaxError', `Unknown symbol “${x}”.`);
        }
        static conflictingBrackets(x) {
            return new ExprError('SyntaxError', `Conflicting brackets “${x}”.`);
        }
        static unclosedBracket(x) {
            return new ExprError('SyntaxError', `Unclosed bracket “${x}”.`);
        }
        static startOperator(x) {
            return new ExprError('SyntaxError', `A term cannot start with a “${x}”.`);
        }
        static endOperator(x) {
            return new ExprError('SyntaxError', `A term cannot end with a “${x}”.`);
        }
        static consecutiveOperators(x, y) {
            return new ExprError('SyntaxError', `A “${x}” cannot be followed by a “${y}”.`);
        }
        static invalidExpression() {
            return new ExprError('SyntaxError', `This expression is invalid.`);
        }
    }
    //# sourceMappingURL=errors.js.map

    // =============================================================================
    // Hilbert.js | Symbols
    // (c) Mathigon
    // =============================================================================
    const CONSTANTS = {
        pi: Math.PI,
        π: Math.PI,
        e: Math.E
    };
    const BRACKETS = {
        '(': ')',
        '[': ']',
        '{': '}',
        '|': '|'
    };
    const SPECIAL_OPERATORS = {
        '*': '·',
        '**': '∗',
        '//': '//',
        '+-': '±',
        '–': '−',
        '-': '−',
        xx: '×',
        sum: '∑',
        prod: '∏',
        int: '∫',
        del: '∂',
        grad: '∇',
        aleph: 'ℵ',
        not: '¬',
        AA: '∀',
        EE: '∃',
        '\'': '’',
        '!=': '≠',
        '<=': '≤',
        '>=': '≥',
        in: '∈',
        '!in': '∉',
        '==': '≡',
        '~=': '≅',
        '~~': '≈',
        sub: '⊂',
        sube: '⊆',
        prop: '∝',
        oo: '∞',
        '<-': '←',
        '->': '→',
        '=>': '⇒',
        '<=>': '⇔',
        '|->': '↦',
        uarr: '↑',
        darr: '↓',
        lArr: '⇐',
    };
    const SPECIAL_IDENTIFIERS = {
        Gamma: 'Γ',
        Delta: 'Δ',
        Theta: 'Θ',
        Lambda: 'Λ',
        Xi: 'Ξ',
        Pi: 'Π',
        Sigma: 'Σ',
        Phi: 'Φ',
        Psi: 'Ψ',
        Omega: 'Ω',
        alpha: 'α',
        beta: 'β',
        gamma: 'γ',
        delta: 'δ',
        epsilon: 'ɛ',
        zeta: 'ζ',
        eta: 'η',
        theta: 'θ',
        iota: 'ι',
        kappa: 'κ',
        lambda: 'λ',
        mu: 'μ',
        nu: 'ν',
        xi: 'ξ',
        pi: 'π',
        rho: 'ρ',
        sigma: 'σ',
        tau: 'τ',
        upsilon: 'υ',
        phi: 'φ',
        chi: 'χ',
        psi: 'ψ',
        omega: 'ω',
        CC: 'ℂ',
        NN: 'ℕ',
        QQ: 'ℚ',
        RR: 'ℝ',
        ZZ: 'ℤ'
    };
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    const LOWERCASE = ALPHABET.split('');
    const UPPERCASE = ALPHABET.toUpperCase().split('');
    const GREEK = Object.values(SPECIAL_IDENTIFIERS);
    const IDENTIFIER_SYMBOLS = [...LOWERCASE, ...UPPERCASE, ...GREEK, '$'];
    const SIMPLE_SYMBOLS = '|()[]{}÷,!<>=*/+-–−~^_…°•∥⊥\'∠:%∼△';
    const COMPLEX_SYMBOLS = Object.values(SPECIAL_OPERATORS);
    const OPERATOR_SYMBOLS = [...SIMPLE_SYMBOLS, ...COMPLEX_SYMBOLS];
    const FUNCTION_NAMES = {
        '_': 'sub',
        '^': 'sup',
        '//': '/',
        '÷': '/'
    };
    const ESCAPES = {
        '<': '&lt;',
        '>': '&gt;'
    };
    function escape(char) {
        return (char in ESCAPES) ? ESCAPES[char] : char;
    }
    const SPECIAL = new Set(['sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'arcsin',
        'arccos', 'arctan', 'sinh', 'cosh', 'tanh', 'sech', 'csch', 'coth', 'exp',
        'log', 'ln', 'det', 'dim', 'mod', 'gcd', 'lcm', 'min', 'max']);
    function isSpecialFunction(fn) {
        return SPECIAL.has(fn);
    }
    const VOICE_STRINGS = {
        '+': 'plus',
        '−': 'minus',
        '·': 'times',
        '×': 'times',
        '/': 'over',
        '//': 'divided by',
        '%': 'percent',
        '!': 'factorial',
        '±': 'plus-minus',
        '=': 'equals',
        '≠': 'does not equal',
        '<': 'is less than',
        '>': 'is greater than',
        '≤': 'is less than or equal to',
        '≥': 'is greater than or equal to',
        'π': 'pi'
    };
    //# sourceMappingURL=symbols.js.map

    // =============================================================================
    /**
     * Maths Expression
     */
    class ExprElement {
        /** Evaluates an expression using a given map of variables and functions. */
        evaluate(vars = {}) { return NaN; }
        /** Substitutes a new expression for a variable. */
        substitute(vars = {}) { return this; }
        /** Returns the simplest mathematically equivalent expression. */
        get simplified() { return this; }
        /** Returns a list of all variables used in the expression. */
        get variables() { return []; }
        /** Returns a list of all functions called by the expression. */
        get functions() { return []; }
        /** Collapses all terms into functions. */
        collapse() { return this; }
        /** Converts the expression to a plain text string. */
        toString() { return ''; }
        /** Converts the expression to a MathML string. */
        toVoice(custom = {}) { return ''; }
        /** Converts the expression to a MathML string. */
        toMathML(custom = {}) { return ''; }
    }
    // -----------------------------------------------------------------------------
    class ExprNumber extends ExprElement {
        constructor(n) {
            super();
            this.n = n;
        }
        evaluate() { return this.n; }
        toString() { return '' + this.n; }
        toVoice() { return '' + this.n; }
        toMathML() { return `<mn>${this.n}</mn>`; }
    }
    class ExprIdentifier extends ExprElement {
        constructor(i) {
            super();
            this.i = i;
        }
        evaluate(vars = {}) {
            if (this.i in vars)
                return vars[this.i];
            if (this.i in CONSTANTS)
                return CONSTANTS[this.i];
            throw ExprError.undefinedVariable(this.i);
        }
        toMathML() {
            const variant = isSpecialFunction(this.i) ? ' mathvariant="normal"' : '';
            return `<mi${variant}>${this.i}</mi>`;
        }
        substitute(vars = {}) { return vars[this.i] || this; }
        get variables() { return [this.i]; }
        toString() { return this.i; }
        toVoice(custom = {}) {
            return (this.i in custom) ? custom[this.i] : VOICE_STRINGS[this.i] || this.i;
        }
    }
    class ExprString extends ExprElement {
        constructor(s) {
            super();
            this.s = s;
        }
        evaluate(vars = {}) {
            if (this.s in vars)
                return vars[this.s];
            throw ExprError.undefinedVariable(this.s);
        }
        toString() { return '"' + this.s + '"'; }
        toVoice() { return this.s; }
        toMathML() { return `<mtext>${this.s}</mtext>`; }
    }
    class ExprSpace extends ExprElement {
        toString() { return ' '; }
        toMathML() { return `<mspace/>`; }
    }
    class ExprOperator extends ExprElement {
        constructor(o) {
            super();
            this.o = o;
        }
        toString() { return this.o.replace('//', '/'); }
        toVoice(custom = {}) {
            return (this.o in custom) ? custom[this.o] : VOICE_STRINGS[this.o] || this.o;
        }
        get functions() { return [this.o]; }
        toMathML() {
            const op = escape(this.toString());
            return `<mo value="${op}">${op}</mo>`;
        }
    }
    //# sourceMappingURL=elements.js.map

    // =============================================================================
    const PRECEDENCE = words('+ − * × · / ÷ // sup sub subsup');
    const SUBSUP = words('sub sup subsup');
    const COMMA = '<mo value="," lspace="0">,</mo>';
    function needsBrackets(expr, parentFn) {
        if (!PRECEDENCE.includes(parentFn))
            return false;
        if (expr instanceof ExprTerm)
            return true;
        if (!(expr instanceof ExprFunction))
            return false;
        if (!PRECEDENCE.includes(expr.fn))
            return false;
        if (SUBSUP.includes(expr.fn) && SUBSUP.includes(parentFn))
            return true;
        return PRECEDENCE.indexOf(parentFn) > PRECEDENCE.indexOf(expr.fn);
    }
    function addMFence(expr, fn, string) {
        return needsBrackets(expr, fn) ? `<mfenced>${string}</mfenced>` : string;
    }
    function addMRow(expr, string) {
        const needsRow = (expr instanceof ExprTerm) || (expr instanceof ExprFunction);
        return needsRow ? `<mrow>${string}</mrow>` : string;
    }
    class ExprFunction extends ExprElement {
        constructor(fn, args = []) {
            super();
            this.fn = fn;
            this.args = args;
        }
        evaluate(vars = {}) {
            const args = this.args.map(a => a.evaluate(vars));
            if (this.fn in vars)
                return vars[this.fn](...args);
            switch (this.fn) {
                case '+':
                    return args.reduce((a, b) => a + b, 0);
                case '−':
                    return (args.length > 1) ? args[0] - args[1] : -args[0];
                case '*':
                case '·':
                case '×':
                    return args.reduce((a, b) => a * b, 1);
                case '/':
                    return args[0] / args[1];
                case 'sin':
                    return Math.sin(args[0]);
                case 'cos':
                    return Math.sin(args[0]);
                case 'tan':
                    return Math.sin(args[0]);
                case 'log':
                    return Math.log(args[0]) / Math.log(args[1] || Math.E);
                case 'sup':
                    return Math.pow(args[0], args[1]);
                case 'sqrt':
                    return Math.sqrt(args[0]);
                case 'root':
                    return Math.pow(args[0], 1 / args[1]);
                case '(':
                    return args[0];
                // TODO Implement for all functions
            }
            throw ExprError.undefinedFunction(this.fn);
        }
        substitute(vars = {}) {
            return new ExprFunction(this.fn, this.args.map(a => a.substitute(vars)));
        }
        collapse() {
            if (this.fn === '(')
                return this.args[0].collapse();
            return new ExprFunction(this.fn, this.args.map(a => a.collapse()));
        }
        get simplified() {
            // TODO Write CAS simplification algorithms
            return this;
        }
        get variables() {
            return unique(flatten(this.args.map(a => a.variables)));
        }
        get functions() {
            return unique([this.fn, ...flatten(this.args.map(a => a.functions))]);
        }
        toString() {
            const args = this.args.map(a => needsBrackets(a, this.fn) ?
                '(' + a.toString() + ')' : a.toString());
            if (this.fn === '−')
                return args.length > 1 ? args.join(' − ') : '−' + args[0];
            if (this.fn === 'sup')
                return args.join('^');
            if (this.fn === 'sub')
                return args.join('_');
            if (this.fn === 'subsup')
                return `${args[0]}_${args[1]}^${args[2]}`;
            if (words('+ * × · / = < > ≤ ≥ ≈').includes(this.fn))
                return args.join(' ' + this.fn + ' ');
            if (isOneOf(this.fn, '(', '[', '{'))
                return this.fn + this.args.join(', ') + BRACKETS[this.fn];
            if (isOneOf(this.fn, '!', '%'))
                return args[0] + this.fn;
            // TODO Implement other functions
            return `${this.fn}(${args.join(', ')})`;
        }
        toMathML(custom = {}) {
            const args = this.args.map(a => a.toMathML(custom));
            const argsF = this.args.map((a, i) => addMFence(a, this.fn, args[i]));
            if (this.fn in custom) {
                const argsX = args.map((a, i) => ({
                    toString: () => a,
                    val: this.args[i]
                }));
                return custom[this.fn](...argsX);
            }
            if (this.fn === '−')
                return argsF.length > 1 ?
                    argsF.join('<mo value="−">−</mo>') :
                    '<mo rspace="0" value="−">−</mo>' + argsF[0];
            if (isOneOf(this.fn, '+', '=', '<', '>', '≤', '≥', '≈')) {
                const fn = escape(this.fn);
                return argsF.join(`<mo value="${fn}">${fn}</mo>`);
            }
            if (isOneOf(this.fn, '*', '×', '·')) {
                let str = argsF[0];
                for (let i = 1; i < argsF.length - 1; ++i) {
                    // We only show the × symbol between consecutive numbers.
                    const showTimes = (this.args[0] instanceof ExprNumber &&
                        this.args[1] instanceof ExprNumber);
                    str += (showTimes ? `<mo value="×">×</mo>` : '') + argsF[1];
                }
                return str;
            }
            if (this.fn === '//')
                return argsF.join(`<mo value="/">/</mo>`);
            if (this.fn === 'sqrt')
                return `<msqrt>${argsF[0]}</msqrt>`;
            if (isOneOf(this.fn, '/', 'root')) {
                // Fractions or square roots don't have brackets around their arguments
                const el = (this.fn === '/' ? 'mfrac' : 'mroot');
                const args1 = this.args.map((a, i) => addMRow(a, args[i]));
                return `<${el}>${args1.join('')}</${el}>`;
            }
            if (isOneOf(this.fn, 'sup', 'sub')) {
                // Sup and sub only have brackets around their first argument.
                const args1 = [addMRow(this.args[0], argsF[0]),
                    addMRow(this.args[1], args[1])];
                return `<m${this.fn}>${args1.join('')}</m${this.fn}>`;
            }
            if (this.fn === 'subsup') {
                const args1 = [addMRow(this.args[0], argsF[0]),
                    addMRow(this.args[1], args[1]), addMRow(this.args[2], args[2])];
                return `<msubsup>${args1.join('')}</msubsup>`;
            }
            if (isOneOf(this.fn, '(', '[', '{'))
                return `<mfenced open="${this.fn}" close="${BRACKETS[this.fn]}">${argsF.join(COMMA)}</mfenced>`;
            if (isOneOf(this.fn, '!', '%'))
                return argsF[0] + `<mo value="${this.fn}" lspace="0">${this.fn}</mo>`;
            if (this.fn === 'abs')
                return `<mfenced open="|" close="|">${argsF.join(COMMA)}</mfenced>`;
            if (this.fn === 'bar')
                return `<mover>${addMRow(this.args[0], argsF[0])}<mo value="‾">‾</mo></mover>`;
            if (this.fn === 'vec')
                return `<mover>${addMRow(this.args[0], argsF[0])}<mo value="→">→</mo></mover>`;
            // TODO Implement other functions
            const variant = isSpecialFunction(this.fn) ? ' mathvariant="normal"' : '';
            return `<mi${variant}>${this.fn}</mi><mfenced>${argsF.join(COMMA)}</mfenced>`;
        }
        toVoice(custom = {}) {
            const args = this.args.map(a => a.toVoice(custom));
            const joined = args.join(' ');
            if (this.fn in custom && !custom[this.fn])
                return joined;
            if (isOneOf(this.fn, '(', '[', '{'))
                return `open bracket ${joined} close bracket`;
            if (this.fn === 'sqrt')
                return `square root of ${joined}`;
            if (this.fn === '%')
                return `${joined} percent`;
            if (this.fn === '!')
                return `${joined} factorial`;
            if (this.fn === '/')
                return `${args[0]} over ${args[1]}`;
            if (this.fn === '//')
                return `${args[0]} divided by ${args[1]}`;
            if (this.fn === 'sup')
                return `${args[0]} to the power of ${args[1]}`;
            if (this.fn === 'sub')
                return joined;
            if (this.fn === 'subsup')
                return `${args[0]} ${args[1]} to the power of ${args[2]}`;
            if (VOICE_STRINGS[this.fn])
                return args.join(` ${VOICE_STRINGS[this.fn]} `);
            // TODO Implement other cases
            if (isSpecialFunction(this.fn))
                return `${this.fn} ${joined}`;
            return `${this.fn} of ${joined}`;
        }
    }
    // -----------------------------------------------------------------------------
    class ExprTerm extends ExprElement {
        constructor(items) {
            super();
            this.items = items;
        }
        evaluate(vars = {}) { return this.collapse().evaluate(vars); }
        substitute(vars = {}) { return this.collapse().substitute(vars); }
        get simplified() { return this.collapse().simplified; }
        get variables() { return unique(join(...this.items.map(i => i.variables))); }
        get functions() { return this.collapse().functions; }
        toString() { return this.items.map(i => i.toString()).join(' '); }
        toMathML(custom = {}) {
            return this.items.map(i => i.toMathML(custom)).join('');
        }
        toVoice(custom = {}) {
            return this.items.map(i => i.toVoice(custom)).join(' ');
        }
        collapse() { return collapseTerm(this.items).collapse(); }
    }
    //# sourceMappingURL=functions.js.map

    // =============================================================================
    // -----------------------------------------------------------------------------
    // Tokenizer
    var TokenType;
    (function (TokenType) {
        TokenType[TokenType["UNKNOWN"] = 0] = "UNKNOWN";
        TokenType[TokenType["SPACE"] = 1] = "SPACE";
        TokenType[TokenType["STR"] = 2] = "STR";
        TokenType[TokenType["NUM"] = 3] = "NUM";
        TokenType[TokenType["VAR"] = 4] = "VAR";
        TokenType[TokenType["OP"] = 5] = "OP";
    })(TokenType || (TokenType = {}));
    function createToken(buffer, type) {
        if (type === TokenType.STR)
            return new ExprString(buffer);
        // Strings can be empty, but other types cannot.
        if (!buffer || !type)
            return undefined;
        if (type === TokenType.SPACE && buffer.length > 1)
            return new ExprSpace();
        if (type === TokenType.NUM) {
            // This can happen if users simply type ".", which get parsed as number.
            if (isNaN(+buffer))
                throw ExprError.invalidExpression();
            return new ExprNumber(+buffer);
        }
        if (type === TokenType.VAR) {
            if (buffer in SPECIAL_IDENTIFIERS) {
                return new ExprIdentifier(SPECIAL_IDENTIFIERS[buffer]);
            }
            else if (buffer in SPECIAL_OPERATORS) {
                return new ExprOperator(SPECIAL_OPERATORS[buffer]);
            }
            else {
                return new ExprIdentifier(buffer);
            }
        }
        if (type === TokenType.OP) {
            if (buffer in SPECIAL_OPERATORS) {
                return new ExprOperator(SPECIAL_OPERATORS[buffer]);
            }
            else {
                return new ExprOperator(buffer);
            }
        }
    }
    function tokenize(str) {
        const tokens = [];
        let buffer = '';
        let type = TokenType.UNKNOWN;
        for (let s of str) {
            // Handle Strings
            if (s === '"') {
                const newType = ((type === TokenType.STR) ?
                    TokenType.UNKNOWN : TokenType.STR);
                const token = createToken(buffer, type);
                if (token)
                    tokens.push(token);
                buffer = '';
                type = newType;
                continue;
            }
            else if (type === TokenType.STR) {
                buffer += s;
                continue;
            }
            const sType = s.match(/[0-9.]/) ? TokenType.NUM :
                IDENTIFIER_SYMBOLS.includes(s) ? TokenType.VAR :
                    OPERATOR_SYMBOLS.includes(s) ? TokenType.OP :
                        s.match(/\s/) ? TokenType.SPACE : TokenType.UNKNOWN;
            if (!sType)
                throw ExprError.invalidCharacter(s);
            if (!type || (type === TokenType.NUM && sType !== TokenType.NUM) ||
                (type === TokenType.VAR && sType !== TokenType.VAR && sType !==
                    TokenType.NUM) ||
                (type === TokenType.OP && !((buffer + s) in SPECIAL_OPERATORS)) ||
                (type === TokenType.SPACE && sType !== TokenType.SPACE)) {
                const token = createToken(buffer, type);
                if (token)
                    tokens.push(token);
                buffer = '';
                type = sType;
            }
            buffer += s;
        }
        const token = createToken(buffer, type);
        if (token)
            tokens.push(token);
        return tokens;
    }
    // -----------------------------------------------------------------------------
    // Utility Functions
    function makeTerm(items) {
        if (items.length > 1)
            return new ExprTerm(items);
        if (items[0] instanceof ExprOperator)
            return new ExprTerm(items);
        return items[0];
    }
    function splitArray(items, check) {
        const result = [[]];
        for (let i of items) {
            if (check(i)) {
                result.push([]);
            }
            else {
                last(result).push(i);
            }
        }
        return result;
    }
    function isOperator(expr, fns) {
        return expr instanceof ExprOperator && words(fns).includes(expr.o);
    }
    function removeBrackets(expr) {
        return (expr instanceof ExprFunction && expr.fn === '(') ? expr.args[0] :
            expr;
    }
    function findBinaryFunction(tokens, fn) {
        if (isOperator(tokens[0], fn))
            throw ExprError.startOperator(tokens[0]);
        if (isOperator(last(tokens), fn))
            throw ExprError.endOperator(last(tokens));
        for (let i = 1; i < tokens.length - 1; ++i) {
            if (!isOperator(tokens[i], fn))
                continue;
            const token = tokens[i];
            const a = tokens[i - 1];
            const b = tokens[i + 1];
            if (a instanceof ExprOperator)
                throw ExprError.consecutiveOperators(a.o, token.o);
            if (b instanceof ExprOperator)
                throw ExprError.consecutiveOperators(token.o, b.o);
            const token2 = tokens[i + 2];
            if (fn === '^ _' && isOperator(token, '_ ^') && isOperator(token2, '_ ^') && token.o !== token2.o) {
                // Special handling for subsup operator.
                const c = tokens[i + 3];
                if (c instanceof ExprOperator)
                    throw ExprError.consecutiveOperators(token2.o, c.o);
                const args = [removeBrackets(a), removeBrackets(b), removeBrackets(c)];
                if (token.o === '^')
                    [args[1], args[2]] = [args[2], args[1]];
                tokens.splice(i - 1, 5, new ExprFunction('subsup', args));
                i -= 4;
            }
            else {
                const fn = FUNCTION_NAMES[token.o] || token.o;
                const args = [removeBrackets(a), removeBrackets(b)];
                tokens.splice(i - 1, 3, new ExprFunction(fn, args));
                i -= 2;
            }
        }
    }
    // -----------------------------------------------------------------------------
    // Match Brackets
    function prepareTerm(tokens) {
        findBinaryFunction(tokens, '^ _');
        findBinaryFunction(tokens, '/');
        return makeTerm(tokens);
    }
    function matchBrackets(tokens) {
        const stack = [[]];
        for (let t of tokens) {
            const lastOpen = last(stack).length ? last(stack)[0].o :
                undefined;
            if (isOperator(t, ') ] }') || (isOperator(t, '|') && lastOpen === '|')) {
                if (!isOperator(t, BRACKETS[lastOpen]))
                    throw ExprError.conflictingBrackets(t.o);
                const closed = stack.pop();
                const term = last(stack);
                // Check if this is a normal bracket, or a function call.
                // Terms like x(y) are treated as functions, rather than implicit
                // multiplication, except for π(y).
                const isFn = (isOperator(t, ')') && last(term) instanceof
                    ExprIdentifier && last(term).i !== 'π');
                const fnName = isFn ? term.pop().i :
                    isOperator(t, '|') ? 'abs' :
                        closed[0].o;
                // Support multiple arguments for function calls.
                const args = splitArray(closed.slice(1), a => isOperator(a, ','));
                term.push(new ExprFunction(fnName, args.map(prepareTerm)));
            }
            else if (isOperator(t, '( [ { |')) {
                stack.push([t]);
            }
            else {
                last(stack).push(t);
            }
        }
        if (stack.length > 1)
            throw ExprError.unclosedBracket(last(stack)[0].o);
        return prepareTerm(stack[0]);
    }
    // -----------------------------------------------------------------------------
    // Collapse term items
    function findAssociativeFunction(tokens, symbol, implicit = false) {
        const result = [];
        let buffer = [];
        let lastWasSymbol = false;
        function clearBuffer() {
            if (lastWasSymbol)
                throw ExprError.invalidExpression();
            if (!buffer.length)
                return;
            result.push(buffer.length > 1 ? new ExprFunction(symbol[0], buffer) : buffer[0]);
            buffer = [];
        }
        for (let t of tokens) {
            if (isOperator(t, symbol)) {
                if (lastWasSymbol || !buffer.length)
                    throw ExprError.invalidExpression();
                lastWasSymbol = true;
            }
            else if (t instanceof ExprOperator) {
                clearBuffer();
                result.push(t);
                lastWasSymbol = false;
            }
            else {
                // If implicit=true, we allow implicit multiplication, except where the
                // second factor is a number. For example, "3 5" is invalid.
                const noImplicit = (!implicit || t instanceof ExprNumber);
                if (buffer.length && !lastWasSymbol &&
                    noImplicit)
                    throw ExprError.invalidExpression();
                buffer.push(t);
                lastWasSymbol = false;
            }
        }
        clearBuffer();
        return result;
    }
    function collapseTerm(tokens) {
        // Filter out whitespace.
        tokens = tokens.filter(t => !(t instanceof ExprSpace));
        if (!tokens.length)
            throw ExprError.invalidExpression();
        // Match percentage and factorial operators.
        if (isOperator(tokens[0], '%!'))
            throw ExprError.startOperator(tokens[0]);
        for (let i = 0; i < tokens.length; ++i) {
            if (!isOperator(tokens[i], '%!'))
                continue;
            tokens.splice(i - 1, 2, new ExprFunction(tokens[i].o, [tokens[i - 1]]));
            i -= 1;
        }
        // Match comparison and division operators.
        findBinaryFunction(tokens, '= < > ≤ ≥');
        findBinaryFunction(tokens, '// ÷');
        // Match multiplication operators.
        tokens = findAssociativeFunction(tokens, '× * ·', true);
        // Match - and ± operators.
        if (isOperator(tokens[0], '− ±')) {
            tokens.splice(0, 2, new ExprFunction(tokens[0].o, [tokens[1]]));
        }
        findBinaryFunction(tokens, '− ±');
        // Match + operators.
        if (isOperator(tokens[0], '+'))
            tokens = tokens.slice(1);
        tokens = findAssociativeFunction(tokens, '+');
        if (tokens.length > 1)
            throw ExprError.invalidExpression();
        return tokens[0];
    }
    //# sourceMappingURL=parser.js.map

    // =============================================================================
    /** Parses a string to an expression. */
    function parse(str, collapse = false) {
        const expr = matchBrackets(tokenize(str));
        return collapse ? expr.collapse() : expr;
    }
    /**
     * Checks numerically if two expressions are equal. Obviously this is not a
     * very robust solution, but much easier than the full CAS simplification.
     */
    function numEquals(expr1, expr2) {
        try {
            const vars = unique([...expr1.variables, ...expr2.variables]);
            const fn1 = expr1.collapse();
            const fn2 = expr2.collapse();
            // We only test positive random numbers, because negative numbers raised
            // to non-integer powers return NaN.
            for (let i = 0; i < 5; ++i) {
                const substitution = {};
                for (let v of vars)
                    substitution[v] = CONSTANTS[v] || Math.random() * 5;
                const a = fn1.evaluate(substitution);
                const b = fn2.evaluate(substitution);
                if (isNaN(a) || isNaN(b))
                    continue; // This might happen in square roots.
                if (!nearlyEquals(a, b))
                    return false;
            }
            return true;
        }
        catch (e) {
            return false;
        }
    }
    const Expression = {
        numEquals,
        parse: cache(parse)
    };
    //# sourceMappingURL=expression.js.map

    // =============================================================================
    const SQRT32 = Math.sqrt(3) / 2;
    function triangleOffset(i, n) {
        return SQRT32 * (i - n * 2 / 3);
    }
    function trianglePoints(n) {
        const results = [];
        for (let i = 0; i <= n; ++i) {
            const x = -i / 2;
            const y = triangleOffset(i, n);
            for (let j = 0; j <= i; ++j) {
                results.push(new Point(x + j, y));
            }
        }
        return results;
    }
    // -----------------------------------------------------------------------------
    function polygonVertex(n, i, m) {
        const x = m / 2 * Math.sin(2 * Math.PI * i / n);
        const y = m / 2 * (1 - Math.cos(2 * Math.PI * i / n));
        return { x, y, m };
    }
    // Generates the center dots for the kth n-gon number.
    function polygonPoints(n, k) {
        const dots = [{ x: 0, y: 0, m: 0 }];
        for (let m = 1; m < k; ++m) { // Loop over each iteration.
            // Generate the vertices of the polygon (except the first).
            const vertices = list(1, n - 1).map(i => polygonVertex(n, i, m));
            dots.push(...vertices);
            // Generate the in-between points along each edge.
            for (let a = 0; a < n - 2; ++a) {
                for (let x = 1; x < m; ++x) {
                    const p = Point.interpolate(vertices[a], vertices[a + 1], x / m);
                    dots.push({ x: p.x, y: p.y, m });
                }
            }
        }
        return dots;
    }
    //# sourceMappingURL=polygons.js.map

    // =============================================================================
    const url = '/resources/shared/vendor/three-91.min.js';
    const renderers = {};
    let threePromise;
    function loadTHREE() {
        if (!threePromise)
            threePromise = loadScript(url);
        return threePromise;
    }
    function getRenderer(width, height) {
        const id = [width, height].join(',');
        if (renderers[id])
            return renderers[id];
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.localClippingEnabled = true;
        renderer.setClearColor($html.hasClass('dark-mode') ? 0x22212e : 0xffffff, 1);
        renderer.setSize(width, height);
        return renderers[id] = renderer;
    }
    function create3D($el, fov, width, height = width) {
        return __awaiter(this, void 0, void 0, function* () {
            const $canvas = $N('canvas', { width, height, style: 'max-width: 100%' }, $el);
            const context = $canvas.ctx;
            yield loadTHREE();
            const scene = new THREE.Scene();
            const renderer = getRenderer(width, height);
            const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 1000);
            scene.add(camera);
            const callbacks = [];
            const onDraw = (fn) => callbacks.push(fn);
            const add = (obj) => scene.add(obj);
            const draw = () => {
                renderer.render(scene, camera);
                context.clearRect(0, 0, width, height);
                context.drawImage(renderer.domElement, 0, 0);
                for (const fn of callbacks)
                    fn();
            };
            return { $canvas, camera, renderer, draw, onDraw, add };
        });
    }
    //# sourceMappingURL=webgl.js.map

    // =============================================================================
    // Polyhedron Component
    // (c) Mathigon
    // =============================================================================
    var Solid_1;
    const STROKE_COLOR = 0x666666;
    const LINE_RADIUS = 0.012;
    const LINE_SEGMENTS = 4;
    const POINT_RADIUS = 0.08;
    function rotate($solid, animate = true, speed = 1) {
        // TODO Damping after mouse movement
        // TODO Better mouse-to-point mapping
        // Only Chrome is fast enough to support auto-rotation.
        const autoRotate = animate && Browser.isChrome && !Browser.isMobile;
        $solid.css('cursor', 'grab');
        let dragging = false;
        let visible = false;
        function frame() {
            if (visible && autoRotate)
                requestAnimationFrame(frame);
            $solid.scene.draw();
            if (!dragging)
                $solid.object.rotation.y += speed * 0.012;
        }
        if (autoRotate) {
            $solid.scene.$canvas.on('enterViewport', () => { visible = true; frame(); });
            $solid.scene.$canvas.on('exitViewport', () => { visible = false; });
        }
        else {
            setTimeout(frame);
        }
        // The 1.1 creates rotations that are slightly faster than the mouse/finger.
        const s = Math.PI / 2 / $solid.scene.$canvas.width * 1.1;
        slide($solid.scene.$canvas, {
            start() {
                dragging = true;
                $html.addClass('grabbing');
            },
            move(posn, start, last) {
                const d = posn.subtract(last).scale(s);
                const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(d.y, d.x));
                $solid.object.quaternion.multiplyQuaternions(q, $solid.object.quaternion);
                $solid.trigger('rotate', { quaternion: $solid.object.quaternion });
                if (!autoRotate)
                    frame();
            },
            end() {
                dragging = false;
                $html.removeClass('grabbing');
            }
        });
    }
    function createEdges(geometry, material, maxAngle) {
        const obj = new THREE.Object3D();
        if (!maxAngle)
            return obj;
        const edges = new THREE.EdgesGeometry(geometry, maxAngle);
        const edgeData = edges.attributes.position.array;
        const points = chunk(chunk(edgeData, 3).map(p => new THREE.Vector3(...p)), 2);
        for (const edge of points) {
            const curve = new THREE.LineCurve3(edge[0], edge[1]);
            const geometry = new THREE.TubeGeometry(curve, 1, LINE_RADIUS, LINE_SEGMENTS);
            obj.add(new THREE.Mesh(geometry, material));
        }
        return obj;
    }
    // -----------------------------------------------------------------------------
    // Custom Element
    let Solid = Solid_1 = class Solid extends CustomElementView {
        constructor() {
            super(...arguments);
            this.isReady = false;
        }
        ready() {
            return __awaiter(this, void 0, void 0, function* () {
                const size = this.attr('size').split(',');
                const width = +size[0];
                const height = size.length > 1 ? +size[1] : width;
                this.css({ width: width + 'px', height: height + 'px' });
                this.scene = yield create3D(this, 35, 2 * width, 2 * height);
                this.scene.camera.position.set(0, 3, 6);
                this.scene.camera.up = new THREE.Vector3(0, 1, 0);
                this.scene.camera.lookAt(new THREE.Vector3(0, 0, 0));
                const light1 = new THREE.AmbientLight(0x555555);
                this.scene.add(light1);
                const light2 = new THREE.PointLight(0xffffff);
                light2.position.set(3, 4.5, 6);
                this.scene.add(light2);
                this.object = new THREE.Object3D();
                this.scene.add(this.object);
                this.trigger('loaded');
                this.isReady = true;
            });
        }
        addMesh(fn) {
            if (this.isReady) {
                this.addMeshCallback(fn);
            }
            else {
                this.one('loaded', () => this.addMeshCallback(fn));
            }
        }
        addMeshCallback(fn) {
            const items = fn(this.scene) || [];
            for (const i of items)
                this.object.add(i);
            if (!this.hasAttr('static')) {
                const speed = +this.attr('rotate') || 1;
                rotate(this, this.hasAttr('rotate'), speed);
            }
            this.scene.draw();
        }
        rotate(q) {
            this.object.quaternion.set(q.x, q.y, q.z, q.w);
            this.scene.draw();
        }
        // ---------------------------------------------------------------------------
        // Element Creation Utilities
        addLabel(text, posn, color = STROKE_COLOR, margin = '') {
            const $label = $N('div', { text, class: 'label3d' });
            $label.css('color', '#' + color.toString(16).padStart(6, '0'));
            if (margin)
                $label.css('margin', margin);
            let posn1 = new THREE.Vector3(...posn);
            this.scene.$canvas.insertAfter($label);
            this.scene.onDraw(() => {
                const p = posn1.clone().applyQuaternion(this.object.quaternion)
                    .add(this.object.position).project(this.scene.camera);
                $label.css('left', (1 + p.x) * this.scene.$canvas.width / 2 + 'px');
                $label.css('top', (1 - p.y) * this.scene.$canvas.height / 2 + 'px');
            });
            return {
                updatePosition(posn) {
                    posn1 = new THREE.Vector3(...posn);
                }
            };
        }
        addArrow(from, to, color = STROKE_COLOR) {
            const material = new THREE.MeshBasicMaterial({ color });
            const obj = new THREE.Object3D();
            const height = new THREE.Vector3(...from).distanceTo(new THREE.Vector3(...to));
            const line = new THREE.CylinderGeometry(0.02, 0.02, height - 0.3, 8, 1, true);
            obj.add(new THREE.Mesh(line, material));
            const start = new THREE.ConeGeometry(0.1, 0.15, 16, 1);
            start.translate(0, height / 2 - 0.1, 0);
            obj.add(new THREE.Mesh(start, material));
            const end = new THREE.ConeGeometry(0.1, 0.15, 16, 1);
            end.rotateX(Math.PI);
            end.translate(0, -height / 2 + 0.1, 0);
            obj.add(new THREE.Mesh(end, material));
            obj.updateEnds = function (f, t) {
                // TODO Support changing the height of the arrow.
                const q = new THREE.Quaternion();
                const v = new THREE.Vector3(t[0] - f[0], t[1] - f[1], t[2] - f[2]).normalize();
                q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v);
                obj.setRotationFromQuaternion(q);
                obj.position.set((f[0] + t[0]) / 2, (f[1] + t[1]) / 2, (f[2] + t[2]) / 2);
            };
            obj.updateEnds(from, to);
            this.object.add(obj);
            return obj;
        }
        addCircle(radius, color = STROKE_COLOR, segments = 64) {
            const path = new THREE.Curve();
            path.getPoint = function (t) {
                const a = 2 * Math.PI * t;
                return new THREE.Vector3(radius * Math.cos(a), radius * Math.sin(a), 0);
            };
            const material = new THREE.MeshBasicMaterial({ color });
            const geometry = new THREE.TubeGeometry(path, segments, LINE_RADIUS, LINE_SEGMENTS);
            const mesh = new THREE.Mesh(geometry, material);
            this.object.add(mesh);
            return mesh;
        }
        addPoint(position, color = STROKE_COLOR) {
            const material = new THREE.MeshBasicMaterial({ color });
            const geometry = new THREE.SphereGeometry(POINT_RADIUS, 16, 16);
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(...position);
            this.object.add(mesh);
        }
        addSolid(geo, color, maxAngle = 5, flatShading = false) {
            const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
            const edges = new THREE.EdgesGeometry(geo, maxAngle);
            const obj = new THREE.Object3D();
            obj.add(new THREE.LineSegments(edges, edgeMaterial));
            obj.add(new THREE.Mesh(geo, Solid_1.solidMaterial(color, flatShading)));
            this.object.add(obj);
            return obj;
        }
        // TODO merge addOutlined() and addWireframe(), by looking at
        //      geometry.isConeGeometry etc.
        // A translucent material with a solid border.
        addOutlined(geo, color = 0xaaaaaa, maxAngle = 5, opacity = 0.1, strokeColor) {
            const solidMaterial = Solid_1.translucentMaterial(color, opacity);
            const solid = new THREE.Mesh(geo, solidMaterial);
            const edgeMaterial = new THREE.MeshBasicMaterial({ color: strokeColor || STROKE_COLOR });
            let edges = createEdges(geo, edgeMaterial, maxAngle);
            const obj = new THREE.Object3D();
            obj.add(solid, edges);
            obj.setClipPlanes = function (planes) {
                solidMaterial.clippingPlanes = planes;
            };
            obj.updateGeometry = function (geo) {
                solid.geometry.dispose();
                solid.geometry = geo;
                obj.remove(edges);
                edges = createEdges(geo, edgeMaterial, maxAngle);
                obj.add(edges);
            };
            this.object.add(obj);
            return obj;
        }
        // Like .addOutlined, but we also add outlines for curved edges (e.g. of
        // a sphere or cylinder).
        addWireframe(geometry, color = 0xaaaaaa, maxAngle = 5, opacity = 0.1) {
            const solid = this.addOutlined(geometry, color, maxAngle, opacity);
            const outlineMaterial = new THREE.MeshBasicMaterial({
                color: STROKE_COLOR,
                side: THREE.BackSide
            });
            outlineMaterial.onBeforeCompile = function (shader) {
                const token = '#include <begin_vertex>';
                const customTransform = '\nvec3 transformed = position + vec3(normal) * 0.02;\n';
                shader.vertexShader = shader.vertexShader.replace(token, customTransform);
            };
            const outline = new THREE.Mesh(geometry, outlineMaterial);
            const knockoutMaterial = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.BackSide
            });
            const knockout = new THREE.Mesh(geometry, knockoutMaterial);
            const obj = new THREE.Object3D();
            obj.add(solid, outline, knockout);
            obj.setClipPlanes = function (planes) {
                if (solid.setClipPlanes)
                    solid.setClipPlanes(planes);
                for (const m of [outlineMaterial, knockoutMaterial])
                    m.clippingPlanes = planes;
            };
            obj.updateGeometry = function (geo) {
                if (solid.updateGeometry)
                    solid.updateGeometry(geo);
                for (const mesh of [outline, knockout]) {
                    mesh.geometry.dispose();
                    mesh.geometry = geo;
                }
            };
            this.object.add(obj);
            return obj;
        }
        // ---------------------------------------------------------------------------
        // Materials
        static solidMaterial(color, flatShading = false) {
            return new THREE.MeshPhongMaterial({
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.9,
                specular: 0x222222,
                // depthWrite: false,
                color, flatShading
            });
        }
        static translucentMaterial(color, opacity = 0.1) {
            return new THREE.MeshLambertMaterial({
                side: THREE.DoubleSide,
                transparent: true,
                depthWrite: false,
                opacity, color
            });
        }
    };
    Solid = Solid_1 = __decorate([
        register('x-solid')
    ], Solid);
    //# sourceMappingURL=solid.js.map

    // =============================================================================
    const COLOURS = [0xff941f, 0xec7031, 0xd94c44, 0xc62857, 0xb30469]; // TODO New Colours
    let Tetrahedron = class Tetrahedron extends Solid {
        created() {
            const layers = +this.attr('layers');
            if (layers > 1)
                this.setAttr('rotate', '1');
            this.addMesh(() => {
                const tetrahedron = new THREE.Object3D();
                const geometry = new THREE.SphereGeometry(0.34, 64, 64);
                for (let i = 0; i < layers; ++i) {
                    const points = trianglePoints(i);
                    const dy = triangleOffset(i, layers) + 0.5;
                    const material = new THREE.MeshPhongMaterial({
                        transparent: true,
                        opacity: 0.9,
                        specular: 0x222222,
                        color: COLOURS[i]
                    });
                    for (const p of points) {
                        const sphere = new THREE.Mesh(geometry, material);
                        sphere.position.set(p.x * 0.65, -dy * 0.65, p.y * 0.65);
                        tetrahedron.add(sphere);
                    }
                }
                return [tetrahedron];
            });
        }
    };
    Tetrahedron = __decorate([
        register('x-tetrahedron')
    ], Tetrahedron);
    //# sourceMappingURL=tetrahedron.js.map

    // =============================================================================
    // -----------------------------------------------------------------------------
    // Introduction
    function showArrows($arrows) {
        $arrows.forEach(($a, i) => $a.enter('pop', 400, i * 200));
    }
    function simplePatterns($step) {
        const $arrows = $step.$$('.with-arrows').map($x => $x.$$('.arrow[hidden]'));
        $step.onScore('blank-0 blank-1', () => showArrows($arrows[0]));
        $step.onScore('blank-2 blank-3', () => showArrows($arrows[1]));
        $step.onScore('blank-4 blank-5', () => showArrows($arrows[2]));
        $step.onScore('blank-6 blank-7', () => showArrows($arrows[3]));
    }
    function fadeInElements($step, tagName) {
        let t = 500;
        for (const $svg of $step.$$('svg')) {
            t += 500;
            $svg.prev.data.display = 'visibility';
            $svg.prev.hide();
            $svg.prev.enter('pop', 400, t);
            for (const $c of $svg.$$(tagName).reverse()) {
                $c.hide();
                $c.enter('pop', 400, t);
                t += 100;
            }
        }
    }
    function triangles($step) {
        fadeInElements($step, 'circle');
    }
    function squares($step) {
        fadeInElements($step, 'rect');
    }
    // -----------------------------------------------------------------------------
    // Arithmetic and Geometric Sequences
    const BOUNCE_RATE = 0.8;
    function bounce(x) {
        const y = [];
        let y0 = 10;
        let x0 = 0;
        while (x0 < 25) {
            y.push(y0 - (x * 4 - x0) ** 2);
            x0 = 0.1 + x0 + Math.sqrt(y0) + Math.sqrt(BOUNCE_RATE * y0);
            y0 = BOUNCE_RATE * y0;
        }
        return 0.7 + 0.93 * Math.max(0, ...y);
    }
    function setPosition($el, p, width, height, r) {
        $el.css({
            left: p.x / width * 100 + '%', top: p.y / height * 100 + '%',
            transform: `rotate(${r}deg)`
        });
    }
    function ball($step) {
        const $chart = $step.$('x-coordinate-system');
        const $slider = $step.$('x-slider');
        const $balls = $step.$$('.tennis-ball');
        $chart.setFunctions(bounce);
        $chart.$xAxis.setAttr('x1', '2');
        const $fn = $chart.$plot.$('path');
        function tick(n) {
            const x = 6.65 * n / $slider.steps;
            const p = $chart.toViewportCoords(new Point(x, bounce(x)));
            const right = ($chart.viewportBounds.xMax - p.x) / $chart.viewportBounds.dx * 100;
            $fn.css('clip-path', `inset(-2px ${right}% -2px -2px)`);
            setPosition($balls[0], p, 640, 320, x * 90);
            setPosition($balls[1], new Point(40, p.y), 640, 320, x * 90);
        }
        $slider.on('move', tick);
        tick(0);
    }
    function ball1($step) {
        const $reveals = $step.$$('.reveal');
        for (const $r of $reveals)
            $r.hide();
        $step.onScore('blank-0 blank-1', () => {
            $reveals.forEach(($r, i) => $r.enter('fade', 400, 100 + i * 100));
            delay(() => $step.score('reveals'), 900);
        });
    }
    function arithmetic(a, d, n) {
        return tabulate((i) => a + i * d, n);
    }
    function geometric(a, r, n) {
        return tabulate((i) => a * Math.pow(r, i), n);
    }
    function arithmeticGeometricSelect($step) {
        const $cols = $step.$('.row').children.map($c => $c.$('p'));
        $step.onScore('blank-0', () => $cols[0].addClass('s-green'));
        $step.onScore('blank-2', () => $cols[2].addClass('s-red'));
        $step.onScore('blank-4', () => $cols[4].addClass('s-red'));
        $step.onScore('blank-7', () => $cols[8].addClass('s-green'));
    }
    function arithmeticGeometricGraph($step) {
        const $plots = $step.$$('x-coordinate-system');
        $step.model.arithmetic =
            (a, d, i) => numberFormat(a + i * d, 4);
        $step.model.geometric =
            (a, r, i) => numberFormat(a * (r ** i), 4);
        $step.model.watch((m) => {
            const p1 = arithmetic(m.a, m.d, 10).map((p, i) => new Point(1 + i, p));
            const p2 = geometric(m.b, m.r, 10).map((p, i) => new Point(1 + i, p));
            $plots[0].setSeries(p1);
            $plots[1].setSeries(p2);
            $plots[0].drawPoints(p1);
            $plots[1].drawPoints(p2);
        });
        const $actions = $step.$$('.var-action');
        $actions[0].on('click', () => $step.model.assign({ b: 2, r: 2 }));
        $actions[1].on('click', () => $step.model.assign({ b: 10, r: 0.6 }));
        $actions[2].on('click', () => $step.model.assign({ b: 3, r: -1.4 }));
    }
    function payItForward($step) {
        $step.$('x-video').on('end', () => $step.score('video'));
    }
    function payItForward2($step) {
        const $equation = $step.$('x-equation');
        const close = Expression.parse('3^n');
        $equation.validate = (expr) => {
            if (Expression.numEquals(expr, close))
                return { error: 'pay-it-forward-close' };
        };
    }
    // -----------------------------------------------------------------------------
    // Figurate Numbers
    function triangleNumbers($step) {
        for (const $c of $step.$$('svg circle'))
            $c.hide();
        setTimeout(() => fadeInElements($step, 'circle'), 200);
    }
    /* export function triangleProof($step: Step) {
      const $g = $step.$('svg g');

      $step.model.watch((m) => {
        $g.removeChildren();
        const points = trianglePoints(m.x - 1);
        const scale = 200/m.x;
        const r = 30 / Math.sqrt(m.x);
        for (let p of points) {
          $N('circle', {cx: 150 + scale * p.x, cy: 150 + scale * p.y, r}, $g);
        }
      });
    } */
    function triangleNumber(n) {
        return n * (n + 1) / 2;
    }
    // Split any integer into a sum of 3 triangle numbers.
    const triangularSum = cache((x) => {
        const results = [];
        let n0 = Math.floor((Math.sqrt(8 * x + 1) - 1) / 2);
        while (n0 > 0) {
            const r1 = x - triangleNumber(n0);
            if (!r1)
                return [n0, 0, 0];
            let n1 = Math.min(n0, Math.floor((Math.sqrt(8 * r1 + 1) - 1) / 2));
            while (n1 > 0) {
                const r2 = r1 - triangleNumber(n1);
                if (!r2)
                    results.push([n0, n1, 0]);
                const n2 = Math.min(n1, Math.floor((Math.sqrt(8 * r2 + 1) - 1) / 2));
                if (r2 === triangleNumber(n2))
                    results.push([n0, n1, n2]);
                n1 -= 1;
            }
            n0 -= 1;
        }
        sortBy(results, r => total(r.map(x => x * x)));
        return last(results);
    });
    function triangleSums($step) {
        const $svgs = $step.$$('svg.t-sum');
        const $sums = $step.$$('strong.t-sum');
        $step.model.watch((model) => {
            const t = triangularSum(model.n);
            const tx = t.map(x => triangleNumber(x));
            for (const i of [0, 1, 2]) {
                $sums[i].textStr = tx[i];
                $svgs[i + 1].removeChildren();
                const s = t[i] <= 9 ? 1 : (1.9 - t[i] / 10);
                for (const p of trianglePoints(t[i] - 1)) {
                    $N('circle', { cx: 70 + 15 * s * p.x, cy: 80 + 15 * s * p.y, r: 6 * s }, $svgs[i + 1]);
                }
            }
            $svgs[0].removeChildren();
            for (let i = 0; i < model.n; ++i) {
                $N('circle', {
                    class: (i < tx[0]) ? 'red' : (i < tx[0] + tx[1]) ? 'blue' : 'green',
                    cx: 7 + 14 * (i % 10),
                    cy: 7 + 14 * Math.floor(i / 10),
                    r: 6
                }, $svgs[0]);
            }
        });
    }
    function squareNumbers1($step) {
        const $groups = $step.$$('svg g');
        const $slider = $step.$('x-slider');
        $slider.on('move', (x) => {
            for (let i = 0; i < 7; ++i) {
                $groups[i].css('display', (i <= x) ? 'block' : 'none');
            }
        });
        $slider.set(6);
    }
    function polygonNumbers($step) {
        const POLYGONS = ['triangle', 'square', 'pentagonal', 'hexagonal',
            'heptagonal', 'octagonal', 'nonagonal', 'decagonal'];
        const COLOURS = ['#ff941f', '#ec7031', '#d94c44', '#c62857', '#b30469',
            '#8e228f', '#693fb4', '#445dda', '#1f7aff', '#2488c0', '#289782',
            '#2da543']; // TODO New colours
        const $svg = $step.$('svg');
        const $slider = $step.$('x-slider');
        const $mn = $step.$$('mn');
        $step.model.assign({ polygonName: (x) => POLYGONS[x - 3] });
        function update(k, x) {
            $svg.removeChildren();
            const points = polygonPoints(k, x);
            const scale = Math.max(...points.map(p => p.y)) / 2;
            $mn[0].textStr = x;
            $mn[1].textStr = points.length;
            for (const p of points) {
                $N('circle', {
                    cx: 150 + (60 + 5 * x) * (scale ? p.x / scale : 0),
                    cy: 130 + (60 + 5 * x) * (scale ? (p.y / scale - 1) : 0),
                    r: Math.min(70, 1 + (250 / k / x)),
                    fill: COLOURS[p.m]
                }, $svg);
            }
        }
        $step.model.watch((m) => update(m.k, $slider.current + 1));
        $slider.on('move', (x) => update($step.model.k, x + 1));
        $slider.set(3);
    }
    // -----------------------------------------------------------------------------
    // Special Sequences
    function eratosthenes($step, $numbers, $gesture, primes, classes) {
        const p = primes.pop();
        const c = classes.pop();
        $numbers[p - 1].addClass(c);
        $gesture.setTarget($numbers[p - 1]);
        $gesture.start();
        $numbers[p - 1].one('click', () => {
            $gesture.stop();
            let time = 0;
            for (let i = 2; i <= 100 / p; ++i) {
                const t = 300 + 400 / i; // Slowly speed up the animation over time.
                delay(() => $numbers[i * p - 1].addClass(c + ' deleted'), time += t);
            }
            delay(() => {
                $step.score('p' + p);
                if (primes.length)
                    eratosthenes($step, $numbers, $gesture, primes, classes);
            }, time + 1000);
        });
    }
    function primes2($step) {
        const $numbers = $step.$$('.eratosthenes *');
        const $gesture = $step.$('x-gesture');
        eratosthenes($step, $numbers, $gesture, [7, 5, 3, 2], ['l-yellow', 'l-green', 'l-blue', 'l-red']);
        const $plot = $step.$('x-coordinate-system');
        const primes = [new Point(2, 1)];
        let n = 1;
        for (let i = 3; i < 247; ++i) {
            primes.push(new Point(i, n));
            if (isPrime(i)) {
                n += 1;
                primes.push(new Point(i, n));
            }
        }
        $plot.setSeries(primes);
    }
    function hailstones(n) {
        const list = [n];
        let last = n;
        while (true) {
            if (last % 2) {
                last = 3 * last + 1;
            }
            else {
                last /= 2;
            }
            if (last === 4)
                return list;
            list.push(last);
        }
    }
    function hailstone1($step) {
        $step.model.hailstones = (n) => hailstones(n).map(i => `<span class="n">${i}</span>`).join(', ');
    }
    function hailstone2($step) {
        const cached = cache(hailstones);
        const $plot = $step.$('x-coordinate-system');
        $step.model.watch((m) => $plot.setPoints([...cached(m.n), 4, 2, 1]));
        const $actions = $step.$$('.var-action');
        $actions[0].on('click', () => $step.model.n = 31);
        $actions[1].on('click', () => $step.model.n = 47);
    }
    function quiz($step) {
        const goals = list(14).map(x => 'blank-' + x).join(' ');
        $step.onScore(goals, () => {
            // Don't show confetti during page load.
            if ($step.isPageLoaded)
                $step.tools.confetti();
        });
    }
    // -----------------------------------------------------------------------------
    // Fibonacci Numbers
    function rabbits($step) {
        const $dividers = $step.$$('line');
        const $paths = $step.$$('path');
        const $arrows = $step.$$('polygon');
        const $rabbits = $step.$$('.rabbit').slice(1);
        const $numbers = $step.$$('.n').slice(1);
        const $stage = $step.$('.rabbits');
        const $slideshow = $step.$('x-slideshow');
        for (const $e of [...$dividers, ...$paths, ...$arrows, ...$numbers, ...$rabbits])
            $e.hide();
        const cum = [0, 1, 2, 4, 7, 12, 20];
        const padding = [10, 20, 30, 40, 50, 60];
        $slideshow.on('next', (x) => {
            $stage.css('padding-bottom', padding[x] + '%');
            $dividers[x - 1].enter('draw', 800);
            $numbers[x - 1].enter('pop', 400, 800);
            for (let i = cum[x]; i < cum[x + 1]; ++i) {
                $rabbits[i - 1].enter('descend', 400, 600 + (i - cum[x]) * 60);
            }
            for (let i = cum[x - 2] || 0; i < cum[x - 1]; ++i) {
                $paths[i].enter('draw', 400, 400);
                $arrows[i].enter('fade', 200, 800);
            }
        });
        $slideshow.on('back', (x) => {
            $stage.css('padding-bottom', padding[x] + '%');
            $dividers[x].exit('draw');
            $numbers[x].exit('pop');
            for (let i = cum[x + 1] || 0; i < cum[x + 2]; ++i) {
                $rabbits[i - 1].exit('ascend');
            }
            for (let i = cum[x - 1]; i < cum[x]; ++i) {
                $paths[i].exit('draw');
                $arrows[i].exit('fade', 200);
            }
        });
    }
    function spirals($step) {
        for (const $s of $step.$$('x-select')) {
            const $cw = $s.next.$('.clockwise');
            const $ccw = $s.next.$('.anticlockwise');
            $s.on('change', ($el) => {
                $cw.setClass('active', $el.data.value === 'cw');
                $ccw.setClass('active', $el.data.value === 'ccw');
            });
        }
    }
    function bees($step) {
        const $img = $step.$$('img');
        $step.$('x-select').on('change', ($el) => __awaiter(this, void 0, void 0, function* () {
            if ($el.data.value === 'female') {
                yield $img[0].exit('fade', 200).promise;
                $img[1].enter('fade', 200);
            }
            else {
                yield $img[1].exit('fade', 200).promise;
                $img[0].enter('fade', 200);
            }
        }));
    }
    function goldenSpiral($step) {
        const $svg = $step.$('svg');
        const $squares = $svg.$$('rect').slice(2);
        const $lines = $svg.$$('path');
        const transforms = ['scale(4) translate(-23%,-23%)',
            'scale(3.5) translate(-23%,-18%)', 'scale(3) translate(-18%,-18%)',
            'scale(1.5) translate(-18%,-23%)', 'none', 'none'];
        $svg.css('transform', transforms[0]);
        for (const $e of [...$squares, ...$lines])
            $e.hide();
        const $slides = $step.$('x-slideshow');
        $slides.on('next', (x) => {
            $svg.css('transform', transforms[x]);
            if (x <= 3) {
                $squares[x - 1].enter('fade');
            }
            else if (x === 4) {
                $squares[3].enter('fade');
                $squares[4].enter('fade', 400, 400);
                $squares[5].enter('fade', 400, 800);
            }
            else if (x === 5) {
                for (const $l of $lines)
                    $l.enter('draw', 2000);
            }
        });
        $slides.on('back', (x) => {
            $svg.css('transform', transforms[x]);
            if (x <= 2) {
                $squares[x].exit('fade');
            }
            else if (x === 3) {
                $squares[3].exit('fade');
                $squares[4].exit('fade');
                $squares[5].exit('fade');
            }
            else if (x === 4) {
                for (const $l of $lines)
                    $l.exit('draw', 1000);
            }
        });
    }
    function goldenRatio1($step) {
        $step.$$('.golden-art').forEach(($img, i) => {
            $img.on('click', () => {
                $img.toggleClass('active');
                $step.score('img-' + i);
            });
        });
    }
    function sunflowerGrowing($step) {
        const $petals = $step.$$('svg path');
        const $bulb = $step.$('svg circle');
        const $slider = $step.$('x-slider');
        const count = $petals.length; // Should be the same as $slider.steps - 1;
        function move(x) {
            for (let i = 0; i <= x; ++i) {
                const t = 3.883222 * i;
                const r = Math.sqrt((x - i) / count);
                const cx = r * 70 * Math.cos(t);
                const cy = r * 70 * Math.sin(t);
                $petals[i].setTransform(new Point(cx, cy), t, 1.5 + r);
            }
            for (let i = x + 1; i < count; ++i) {
                const t = 3.883222 * i;
                $petals[i].setTransform(undefined, t, 0.05);
            }
            $bulb.setTransform(undefined, 0, 1 + 69 * Math.sqrt(x / count));
        }
        $slider.on('move', move);
        move(0);
    }
    function sunflowerSpiral($step) {
        const COUNT = 500;
        const $slider = $step.$('x-slider');
        const $slideshow = $step.$('x-slideshow');
        const $svg = $step.$('svg');
        const $value = $step.$('.value');
        const $circles = list(COUNT).map(() => $N('circle', { r: 3 }, $svg));
        $slider.on('move', (x) => {
            for (let i = 0; i < COUNT; ++i) {
                const t = i * Math.PI * 2 * x / $slider.steps;
                const r = Math.sqrt(i) / Math.sqrt(COUNT) * 196;
                $circles[i].setCenter({
                    x: 200 + r * Math.cos(t),
                    y: 200 + r * Math.sin(t)
                });
            }
            $value.text = `${round(x / 1000 * 360, 1)}° (${Math.round(x) / 1000} rotations)`;
        });
        $slideshow.on('next back', (x) => {
            if (x === 0)
                $slider.moveTo(0);
            if (x === 1)
                $slider.moveTo($slider.steps / 2);
            if (x === 2)
                $slider.moveTo($slider.steps * 0.4);
            if (x === 4)
                $slider.moveTo($slider.steps / Math.PI);
            if (x === 5)
                $slider.moveTo($slider.steps * 0.6180339);
        });
        for (const $a of $step.$$('.fib-action')) {
            const x = $slider.steps * (+$a.data.value);
            $a.on('click', () => $slider.moveTo(x));
        }
        $slider.set(0.411 * $slider.steps);
    }
    // -----------------------------------------------------------------------------
    // Pascal's Triangle
    function pascalIntro($step) {
        const $rows = $step.$$('.r').map($r => $r.$$('.c'));
        for (let i = 1; i < $rows.length; ++i) {
            for (let j = 1; j < $rows[i].length - 1; ++j) {
                hover($rows[i][j], {
                    enter() {
                        $rows[i][j].addClass('red');
                        $rows[i - 1][j - 1].addClass('yellow');
                        $rows[i - 1][j].addClass('yellow plus');
                    },
                    exit() {
                        $rows[i][j].removeClass('red');
                        $rows[i - 1][j - 1].removeClass('yellow');
                        $rows[i - 1][j].removeClass('yellow plus');
                    }
                });
            }
        }
    }
    const colours = ['yellow', 'orange', 'red', 'purple', 'blue', 'teal', 'green',
        'lime'];
    const colourFunctions = [
        (i, j) => (j === 0 || j === i) ? 'yellow' : '',
        (i, j) => (j === 1 || j === i - 1) ? 'orange' : '',
        (i, j) => (j === 2 || j === i - 2) ? 'red' : '',
        (i, j) => (j === 3 || j === i - 3) ? 'purple' : '',
        (i, j) => (j && j > i) ? 'visible plus blue' : j ? 'plus' : '',
        (i, j) => !isPrime(i) ? '' : (j === 1 || j === i - 1) ? 'blue' : (j > 1 && j < i - 1) ? 'teal' : '',
        (i, j) => colours[i % 8] + ((j > i / 2) ? ' plus visible' : ' light') // fibonacci
    ];
    let colourIndex = 0;
    function colourPascal($rows, $cells, fn, index) {
        for (const $c of $cells)
            $c.setAttr('class', 'c');
        let t = 0;
        for (let i = 0; i < $rows.length; ++i) {
            for (let j = 0; j < $rows[i].length; ++j) {
                const className = fn(i, j, +$rows[i][j].text);
                if (className)
                    delay(() => {
                        if (index === colourIndex)
                            $rows[i][j].addClass(className);
                    }, t += 6000 / (i * i + 100));
            }
        }
    }
    const fibonacci = cache((x) => {
        return (x < 3) ? 1 : fibonacci(x - 1) + fibonacci(x - 2);
    });
    function pascalSequences($step) {
        const $rows = $step.$$('.r').map($r => $r.$$('.c'));
        const $cells = flatten($rows);
        const $tabbox = $step.$('x-tabbox');
        const $body = $tabbox.$('.body');
        const $sums = $rows.map($row => last($row));
        // Fibonacci numbers are coloured by diagonal
        const $fibonacci = tabulate(() => [], 16 * 2 + 1); // 16 -> number of rows
        $rows.forEach(($cells, i) => $cells.forEach(($c, j) => {
            if (i + i - j >= 0)
                $fibonacci[i + i - j].push($c);
        }));
        function onChange(i) {
            colourIndex += 1;
            $body.setAttr('class', 'body s-' + colours[i]);
            if (i === 4)
                $sums.forEach(($s, t) => { $s.textStr = Math.pow(2, t); });
            if (i === 6)
                $sums.forEach(($s, t) => { $s.textStr = fibonacci(t); });
            const $r = (i === 6) ? $fibonacci : $rows;
            colourPascal($r, $cells, colourFunctions[i], colourIndex);
        }
        $tabbox.on('change', onChange);
        onChange(0);
        for (let i = 0; i < 6; ++i) {
            $step.$blanks[i].on('valid', () => {
                delay(() => $tabbox.makeActive(i + 1), 800);
            });
        }
    }
    function modular($step) {
        const $cells = $step.$$('.c');
        let count = 0;
        for (const $c of $cells) {
            const d = (+$c.text);
            let done = false;
            $c.on('click', () => {
                if (d % 2)
                    return $step.addHint('not-even');
                if (done)
                    return;
                done = true;
                $c.addClass('red');
                count += 1;
                if (count === 9) {
                    $step.score('select');
                    $step.addHint('correct');
                }
            });
        }
    }
    function modular1($step) {
        const $rows = $step.$$('.r').map($r => $r.$$('.c'));
        const $cells = flatten($rows);
        for (const $btn of $step.$$('.pascal-buttons .btn')) {
            const x = +$btn.data.value;
            const colour = ['red', 'blue', 'green', 'yellow'][x - 2];
            const fn = (i, j, n) => (n % x === 0) ? colour : '';
            $btn.on('click', () => {
                colourIndex += 1;
                colourPascal($rows, $cells, fn, colourIndex);
                $step.score('c' + x);
            });
        }
    }
    //# sourceMappingURL=functions.js.map

    exports.arithmeticGeometricGraph = arithmeticGeometricGraph;
    exports.arithmeticGeometricSelect = arithmeticGeometricSelect;
    exports.ball = ball;
    exports.ball1 = ball1;
    exports.bees = bees;
    exports.goldenRatio1 = goldenRatio1;
    exports.goldenSpiral = goldenSpiral;
    exports.hailstone1 = hailstone1;
    exports.hailstone2 = hailstone2;
    exports.modular = modular;
    exports.modular1 = modular1;
    exports.pascalIntro = pascalIntro;
    exports.pascalSequences = pascalSequences;
    exports.payItForward = payItForward;
    exports.payItForward2 = payItForward2;
    exports.polygonNumbers = polygonNumbers;
    exports.primes2 = primes2;
    exports.quiz = quiz;
    exports.rabbits = rabbits;
    exports.simplePatterns = simplePatterns;
    exports.spirals = spirals;
    exports.squareNumbers1 = squareNumbers1;
    exports.squares = squares;
    exports.sunflowerGrowing = sunflowerGrowing;
    exports.sunflowerSpiral = sunflowerSpiral;
    exports.triangleNumbers = triangleNumbers;
    exports.triangleSums = triangleSums;
    exports.triangles = triangles;

    return exports;

}({}));
