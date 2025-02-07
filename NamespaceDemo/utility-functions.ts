namespace Utility {
    export function maxBookAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }

    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {
            return daysLate * 0.25;
        }
    }

    function privateFunc(): void {
        console.log('This is a private function');
    }
}
