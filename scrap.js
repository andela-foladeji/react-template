<div className="content status-area">
                <div className="col s10 offset-s1">
                    <div className="row actions">
                        <div className="col s4"><i className="fa fa-pencil" aria-hidden="true"></i> Share an update</div>
                        <div className="col s4"><i className="fa fa-picture-o" aria-hidden="true"></i> Upload a photo</div>
                        <div className="col s4"><i className="fa fa-book" aria-hidden="true"></i> Write an article</div>
                    </div>
                    <textarea id="status-text" placeholder="Write something..."></textarea>
                </div>
            </div>
            <div className="content each-post">
                <div className="author">
                    <img src="images/profile-image.png" className="responsive-img circle author-img" alt=""/>
                    <p className="author-name"><span className="name">Bernard Amault</span><br/><span className="position">CEO at LVMH</span></p>
                    <p className="moment">3 hours</p>
                </div>
                <p className="post-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="post-summary">
                    <i className="fa fa-heart-o" aria-hidden="true"></i> 2 &nbsp; &nbsp;
                    <i className="fa fa-comment-o" aria-hidden="true"></i> 2  &nbsp; &nbsp;
                    <i className="fa fa-share-alt" aria-hidden="true"></i>
                </div>
                <div className="comments-section">
                    <div className="each-comment">
                        <img src="images/profile-image.png" className="responsive-img circle" alt=""/>
                        <p>um dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                </div>
            </div>

.status-area {
    height: 150px;
}

.actions {
    border-bottom: 1px solid #ccc;
    height: 70px;
}

.actions > div {
    line-height: 70px;
    height: 70px;
    cursor: pointer;
}

.actions > div:hover {
    border-bottom: 1px solid #0274b3
}

#status-text {
    border: none;
    resize: none;
    color: #666;
}

#status-text:focus {
    outline: none;
}

.each-post {
    margin-top: 20px;
    padding: 0 3%;
}

.author {
    height: 100px;
}

.author-img {
    width: 60px;
    margin: 20px 10px 0 0;
    float: left;
}

.author-name {
    float: left;
    margin-top: 28px;
}

.name {
    font-weight: bold;
}

.position {
    color: #666;
    font-size: 12px;
}

.moment {
    float: right;
    height: 22px;
    margin-top: 38px;
}

.post-details {
    color: #666;
    text-align: justify;
    font-size: 13px;
    padding: 20px 0;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.post-summary {
    font-size: 12px;
}

.comments-section {
    border-top: 1px solid #ccc;
    margin-top: 15px;
    padding-top: 10px;
}

.each-comment img {
    width: 10%;
    float:left;
    
}

.each-comment i {
    cursor: pointer;
}

.each-comment p {
    float: left;
    width: 90%;
}

.each-comment .comment-author {
    font-weight: bold;
}