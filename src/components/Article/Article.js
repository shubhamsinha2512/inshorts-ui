import React from 'react'
import './Article.css'

function Article({article}) {


    return (
        <div id='art' className='article'>
            <img className='articleImg' src={article.image} alt='article' />
            <div className='articleMain'>
                <h4 className='articleHeading'>
                    {article.heading}
                </h4>

                <p className='articleBody'>
                    {article.body}
                </p>
            </div>
                <div className='articleFooter'>
                    <h6 className='articleFooterLine'>
                        {article.footer}
                    </h6>
                    Tap to read the entire report
                </div>
        </div>
    )
}

export default Article
