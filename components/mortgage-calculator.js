class MortgageCalculator {
    componentName = 'mortgage-calculator';
    maxYears = 40;
    maxRate = 10;
    years = 1;
    rate = 1;

    constructor(instanceName) {
        this.instanceName = instanceName;
    }

    init(props) {
        this.element = document.querySelector(`[data-instance-name="${this.instanceName}"]`);
        this.years = props.defaultYears;
        this.rate = props.defaultRate;
        this.element.classList.add('mortgage-calculator');

        const template = `
<div class="component">
    <header class="component__header">
        <h2 class="component__title">${props.title}</h2>
    </header>
    <div class="component__inner">
        <section class="component__panel panel">
            <div class="panel__header">
                <p class="panel__text">Change values to calculate your results</p>
            </div>
            <div class="panel__body">
                <div class="panel__input-group panel__input-group_short">
                    <label class="panel__label">Years of mortgage</label>
                    <div class="range">
                        <span class="range__min">1</span>
                        <input data-instance="rangeYears" class="range__slider" type="range" min="1" max="40" step="1" value="${this.years}">
                        <span class="range__max">${this.maxYears}</span>
                        <div class="range__input">
                            <span data-output="rangeYears" class="range__value">${this.years}</span>
                        </div>
                    </div>
                </div>
                <div class="panel__input-group panel__input-group_short">
                    <label class="panel__label">Rate of interest (%)</label>
                    <div class="range">
                        <span class="range__min">0.1</span>
                        <input data-instance="rangeRate" class="range__slider" type="range" min="0.1" max="10" step="0.1" value="${this.rate}">
                        <span class="range__max">${this.maxRate}</span>
                        <div class="range__input">
                            <span data-output="rangeRate" class="range__value">${this.rate}</span>
                        </div>
                    </div>
                </div>
                <div class="panel__input-group">
                    <label class="panel__label_large">Loan Amount</label>
                    <div class="panel__input-wrap">
                        <span class="panel__input-denomination">$</span>
                        <input class="panel__input" value="1000000">
                    </div>
                </div>
                <div class="layout__2col">
                    <div class="layout__col">
                        <div class="panel__input-group">
                            <label class="panel__label_large">Annual Tax</label>
                            <div class="panel__input-wrap">
                                <span class="panel__input-denomination">$</span>
                                <input data-input="annual-tax" class="panel__input" value="1000">
                            </div>
                        </div>
                    </div>
                    <div class="layout__col">
                        <div class="panel__input-group">
                            <label class="panel__label_large">Annual Insurance</label>
                            <div class="panel__input-wrap">
                                <span class="panel__input-denomination">$</span>
                                <input data-input="annual-insurance" class="panel__input" value="300">
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn">Calculate</button>
            </div>
        </section>
        <div class="sub-panel">
            <h2 class="sub-panel__title">Your results</h2>
            <div class="sub-panel__result result">
                <p class="result__label">Principal & Interest</p>
                <p class="result__amount"><span class="result__denomination">$</span>733.27</p>
            </div>
            <div class="sub-panel__result result">
                <p class="result__label">Tax</p>
                <p class="result__amount"><span class="result__denomination">$</span>83.33</p>
            </div>
        </div>
    </div>
</div>
        `;

        this.element.insertAdjacentHTML('afterbegin', template);

        const rangeSliderYears = this.element.querySelector('[data-instance="rangeYears"]');
        const rangeSliderYearsOutput = this.element.querySelector('[data-output="rangeYears"]');
        rangeSliderYears.oninput = (e) => {
            rangeSliderYearsOutput.textContent = rangeSliderYears.value;
        }

        const rangeSliderRate = this.element.querySelector('[data-instance="rangeRate"]');
        const rangeSliderRateOutput = this.element.querySelector('[data-output="rangeRate"]');
        rangeSliderRate.oninput = (e) => {
            rangeSliderRateOutput.textContent = rangeSliderRate.value;
        }
    }



    get componentName() {
        return this._componentName;
    }
    get instanceName() {
        return this._instanceName;
    }
    get defaultYears() {
        return this._defaultYears;
    }

    get defaultRate() {
        return this._defaultRate;
    }

    set instanceName(name) {
        this._instanceName = name;
    }
    set years(value) {
        if(value > 0 && value < this.maxYears + 1) {
            this._years = value;
        }
    }
    set rate(value) {
        if(value > 0 && value < this.maxRate + 1) {
            this._rate = value;
        }
    }
}

export {MortgageCalculator};