import { Component } from 'react';

class Home extends Component {
    state = {
        amount: 0,
        interest: 0,
        fromDate: new Date(),
        toDate: new Date(),
        days: 0,
        perDayInterest: 0,
        result: 0
    }

    onPrincipleChange(e) {
        this.setState({ amount: parseInt(e.target.value) });
    }

    onInterestChange(e) {
        this.setState({ interest: parseFloat(e.target.value) });
    }

    onFromDateChange(e) {
        this.setState({ fromDate: new Date(e.target.value) });
    }

    onToDateChange(e) {
        this.setState({ toDate: new Date(e.target.value) });
    }


    onClick(e) {
        e.preventDefault();
        const days = (this.state.toDate.getTime() - this.state.fromDate.getTime())/(24*60*60*1000);
        const perDayInterest = ((this.state.amount*this.state.interest)/100)/365;
        const result = Math.round(days * perDayInterest, 2);
        this.setState({ days });
        this.setState({ perDayInterest });
        this.setState({ result });
    }

    render() {
        const {amount, interest, days, perDayInterest, result} = this.state
        return(
            <>
                <h1 className="text-center">Simple Interest Calculator</h1>
                <article className="row">
                    <section className="col-md-6 p-2">
                        <form className="d-flex flex-column">
                            <div className="form-group my-2">
                                <label>Principle Amount</label>
                                <input type="text" className="form-control form-control-md" onChange={this.onPrincipleChange.bind(this)} />
                            </div>
                            <div className="form-group my-2">
                                <label>Interest</label>
                                <input type="text" className="form-control form-control-md" onChange={this.onInterestChange.bind(this)} />
                            </div>
                            <div className="form-group my-2">
                                <label>From Date</label>
                                <input type="date" className="form-control form-control-md" onChange={this.onFromDateChange.bind(this)} />
                            </div>
                            <div className="form-group my-2">
                                <label>To Date</label>
                                <input type="date" className="form-control form-control-md" onChange={this.onToDateChange.bind(this)} />
                            </div>
                            <div className="form-group my-2">
                                <button type="submit" className="btn btn-primary" onClick={this.onClick.bind(this)}>Calculate</button>
                            </div>
                        </form>
                    </section>
                    {
                        this.state.result !== 0 ? (
                            <section className="col-md-6 p-2 align-self-center">
                                <table className="table">
                                    {/* <thead>
                                        <tr>
                                            <th col-span="2">Result</th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                    <tr>
                                        <th>Your Principle is</th>
                                        <td>{amount}</td>
                                    </tr>
                                    <tr>
                                        <th>Total days</th>
                                        <td>{days}</td>
                                    </tr>
                                    <tr>
                                        <th>Your Interest is</th>
                                        <td>{result}</td>
                                    </tr>
                                    <tr>
                                        <th>Total Amount</th>
                                        <td>{amount+result}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </section>
                        ) : ''
                    }
                </article>
            </>
        )
    }
}
export default Home