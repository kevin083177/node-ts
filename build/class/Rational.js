"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = void 0;
class Rational {
    numerator;
    denominator;
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    getNUmerator() {
        return this.numerator;
    }
    getDenominator() {
        return this.denominator;
    }
    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
    gcd(a, b) {
        while (b != 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    normalize() {
        let gcd = this.gcd(this.numerator, this.denominator);
        this.numerator /= gcd;
        this.denominator /= gcd;
        return this;
    }
    isWhole() {
        return this.numerator % this.denominator == 0;
    }
    isDecimal() {
        return !this.isWhole();
    }
    equals(r) {
        return this.normalize().numerator == r.numerator && this.normalize().denominator == r.denominator;
    }
    static _parseRational(numer, denomina) {
        let num = numer.join('');
        let denom = denomina.join('');
        return new Rational(parseInt(num), parseInt(denom));
    }
    static parseRational(str) {
        let parts = str.split("/");
        let num = parseInt(parts[0]);
        let denom = parseInt(parts[1]);
        return new Rational(num, denom);
    }
}
exports.Rational = Rational;
