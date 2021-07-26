class MortgageCalculator {
    componentName = 'mortgage-calculator';
    maxYears = 40;
    maxRate = 10;
    years = 1;
    rate = 1;

    constructor(instanceName) {
        this.instanceName = instanceName;
        this.element = document.querySelector(`[data-instance-name="${this.instanceName}"]`);
    }

    setupTemplate(props) {console.log(props);
        return `
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
                                <input data-input="range-years" class="range__slider" type="range" min="1" max="40" step="1" value="${this.years}">
                                <span class="range__max">${this.maxYears}</span>
                                <div class="range__input">
                                    <span data-input="range-years-display" class="range__value">${this.years}</span>
                                </div>
                            </div>
                        </div>
                        <div class="panel__input-group panel__input-group_short">
                            <label class="panel__label">Rate of interest (%)</label>
                            <div class="range">
                                <span class="range__min">0.1</span>
                                <input data-input="range-rate" class="range__slider" type="range" min="0.1" max="10" step="0.1" value="${this.rate}">
                                <span class="range__max">${this.maxRate}</span>
                                <div class="range__input">
                                    <span data-input="range-rate-display" class="range__value">${this.rate}</span>
                                </div>
                            </div>
                        </div>
                        <div class="panel__input-group">
                            <label class="panel__label_large">Loan Amount</label>
                            <div class="panel__input-wrap">
                                <span class="panel__input-denomination">$</span>
                                <input data-input="loan-amount" class="panel__input" value="${props.defaultLoan}">
                            </div>
                        </div>
                        <div class="layout__2col">
                            <div class="layout__col">
                                <div class="panel__input-group">
                                    <label class="panel__label_large">Annual Tax</label>
                                    <div class="panel__input-wrap">
                                        <span class="panel__input-denomination">$</span>
                                        <input data-input="annual-tax" class="panel__input" value="${props.defaultTax}">
                                    </div>
                                </div>
                            </div>
                            <div class="layout__col">
                                <div class="panel__input-group">
                                    <label class="panel__label_large">Annual Insurance</label>
                                    <div class="panel__input-wrap">
                                        <span class="panel__input-denomination">$</span>
                                        <input data-input="annual-insurance" class="panel__input" value="${props.defaultInsurance}">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button data-function="calculate" class="btn">Calculate</button>
                    </div>
                </section>
                <div class="sub-panel hidden">
                    <h3 class="sub-panel__title">Your results</h3>
                    <div class="result">
                        <p class="result__label">Principal & Interest</p>
                        <p class="result__amount"><span class="result__denomination">$</span><span data-result="principal-interest"></span></p>
                    </div>
                    <div class="result">
                        <p class="result__label">Tax</p>
                        <p class="result__amount"><span class="result__denomination">$</span><span data-result="tax"></span></p>
                    </div>
                    <div class="result">
                        <p class="result__label">Insurance</p>
                        <p class="result__amount"><span class="result__denomination">$</span><span data-result="insurance"></span></p>
                    </div>
                    <div class="result">
                        <p class="result__label">Total Monthly Payment</p>
                        <p class="result__amount"><span class="result__denomination">$</span><span data-result="payment"></span></p>
                    </div>
                </div>
            </div>
        </div>
                `;
    }

    setupRangeSliders() {
        const rangeSliderYears = this.element.querySelector('[data-input="range-years"]');
        const rangeSliderYearsOutput = this.element.querySelector('[data-input="range-years-display"]');
        rangeSliderYears.oninput = (e) => {
            rangeSliderYearsOutput.textContent = rangeSliderYears.value;
        }

        const rangeSliderRate = this.element.querySelector('[data-input="range-rate"]');
        const rangeSliderRateOutput = this.element.querySelector('[data-input="range-rate-display"]');
        rangeSliderRate.oninput = (e) => {
            rangeSliderRateOutput.textContent = rangeSliderRate.value;
        }
    }

    calculateFunction = (event) => {
        console.log(event);
        const resultPanel = this.element.querySelector('.sub-panel');
        resultPanel.classList.remove('hidden');

        const outputPrincipalElm = resultPanel.querySelector('[data-result="principal-interest"]');
        const outputTaxElm = resultPanel.querySelector('[data-result="tax"]');
        const outputInsuranceElm = resultPanel.querySelector('[data-result="insurance"]');
        const outputPaymentElm = resultPanel.querySelector('[data-result="payment"]');

        const inputYearsElm = this.element.querySelector('[data-input="range-years"]');
        const inputRateElm = this.element.querySelector('[data-input="range-rate"]');
        const inputLoanElm = this.element.querySelector('[data-input="loan-amount"]');
        const inputTaxElm = this.element.querySelector('[data-input="annual-tax"]');
        const inputInsuranceElm = this.element.querySelector('[data-input="annual-insurance"]');

        const resultPrincipal = ((inputRateElm.value / 100) / 12) * inputLoanElm.value / (1 - Math.pow((1 + ((inputRateElm.value / 100)/12)), - inputYearsElm.value * 12))/12;
        outputPrincipalElm.textContent = resultPrincipal.toFixed(2);

        const resultTax = inputTaxElm.value / 12;
        outputTaxElm.textContent = resultTax.toFixed(2);

        const resultInsurance = inputInsuranceElm.value / 12;
        outputInsuranceElm.textContent = resultInsurance.toFixed(2);

        const resultPayment = resultPrincipal + resultTax + resultInsurance;
        outputPaymentElm.textContent = resultPayment.toFixed(2);
    }

    setupCalculateFunction(props) {
        const calculateBtn = this.element.querySelector('[data-function="calculate"]');
        calculateBtn.addEventListener('click', this.calculateFunction);
    }

    init(props) {
        this.years = props.defaultYears;
        this.rate = props.defaultRate;
        this.element.classList.add('mortgage-calculator');

        const template = this.setupTemplate(props);
        this.element.insertAdjacentHTML('afterbegin', template);

        this.setupRangeSliders();
        this.setupCalculateFunction(props);
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