import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TopHeader from '../components/headers/TopHeader';


class filterPage extends Component {


    //   constructDataItem = (json) => {
    //     let bookData = [];
    //     return new Promise((response, reject) => {
    //         json.docs.forEach((book, index) => {
    //             let isbn = !book.isbn ? `null${index}` : (typeof book.isbn !== "object" ? book.isbn : book.isbn[0])
    //             bookData.push({
    //                 author_name: typeof book.author_name !== "object" ? book.author_name : book.author_name[0],
    //                 title: book.title,
    //                 publish_year: typeof book.publish_year !== "object" ? book.publish_year : book.publish_year[0],
    //                 isbn: isbn,
    //                 cover: `http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
    //             })
    //         });
    //         response(bookData)
    //     })

    //   }

    //   queryItems = (check, text) => {

    //     if(!text) return
    //     this.setState({data: []})


    //     if(check === "title"){
    //         //query by title
    //         fetch(`https://openlibrary.org/search.json?q=${check}:${text}&limit=50&mode=everything`)
    //             .then(res => res.json())
    //             .then(json => this.constructDataItem(json))
    //             .then(bookData => this.setState({data: bookData}))
    //             .catch(err => console.log(err))
    //     }else{
    //         //query by content inside
    //         fetch(`https://openlibrary.org/search.json?q=${text}&limit=1&mode=everything`)
    //             .then(res => res.json())
    //             .then(json => this.constructDataItem(json))
    //             .then(bookData => this.setState({data: bookData}))
    //             .catch(err => console.log(err))
    //     }
    //   }


    render() {
        return (
            <div>
                < TopHeader />

            </div>
        )
    }
}

export default filterPage
