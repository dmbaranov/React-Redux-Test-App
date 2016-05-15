import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
    onYearClick(e) {
        this.props.getPhotos(+e.target.textContent)
    }
    render() {
        const { photos, year, isFetching } = this.props
        console.log(isFetching);
        return <div>
            <p>
                <button className="btn" onClick={ this.onYearClick.bind(this) }>2016</button>
                <button className="btn" onClick={ this.onYearClick.bind(this) }>2015</button>
                <button className="btn" onClick={ this.onYearClick.bind(this) }>2014</button>
            </p>
            <h3>{year} year</h3>
            {
                isFetching ? <p>Loading...</p> : <p>You have {photos.length} photos</p>
            }
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
}