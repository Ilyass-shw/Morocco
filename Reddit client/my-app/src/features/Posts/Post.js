import React from "react";
import PropTypes from "prop-types";
import "./Post.css";
import im from "./imgs/icons/background_photo_desktop.webp";
import logo from "./imgs/icons/favicon.ico";

const Post = ({ post }) => {
	return (
		<div className="post-block">
			<img src={im} alt="post" className="content-image" />
			<div className="post-data">
				<div className='post-data-container'>
					<h4 className="title">{post.title}</h4>
					<p>{post.upvotes}</p>
					<p>{post.date}</p>
					<img src={logo} alt="subreddit's icon" className="subreddit-icon" />
					<p>{post.subreddit}</p>
				</div>
			</div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired,
};

export default Post;
