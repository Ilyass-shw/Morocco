import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";
import { Icon, InlineIcon } from "@iconify/react";
import redditFill from "@iconify-icons/akar-icons/reddit-fill";
import bxMenu from "@iconify-icons/bx/bx-menu";
import homeIcon from "@iconify-icons/entypo/home";
import sharpLocalFireDepartment from "@iconify-icons/ic/sharp-local-fire-department";
import baselineSubscriptions from "@iconify-icons/ic/baseline-subscriptions";

// npm install --save-dev @iconify/react @iconify-icons/whh
import alienshipIcon from "@iconify-icons/whh/alienship";

// npm install --save-dev @iconify/react @iconify-icons/bx
import bxTrendingUp from "@iconify-icons/bx/bx-trending-up";

// npm install --save-dev @iconify/react @iconify-icons/foundation
import graphBar from "@iconify-icons/foundation/graph-bar";

// npm install --save-dev @iconify/react @iconify-icons/jam
import orderedList from "@iconify-icons/jam/ordered-list";

// npm install --save-dev @iconify/react @iconify-icons/majesticons
import videoCamera from "@iconify-icons/majesticons/video-camera";

// npm install --save-dev @iconify/react @iconify-icons/ic
import baselineVideoLibrary from "@iconify-icons/ic/baseline-video-library";

// npm install --save-dev @iconify/react @iconify-icons/ic
// import baselineVideoLibrary from "@iconify-icons/ic/baseline-video-library";

const NavBar = (props) => {
	return (
		<div className="sideNav">
			<ul>
				{/* <li>
					<Icon icon={redditFill} color="#FF0000" />
				</li> */}
				{/* <Icon icon={alienshipIcon} color="blue" /> */}
				<a href="#">
					<li>
						<Icon icon={bxMenu} color={"white"} width="1.5rem" height="1.5rem" />
					</li>
				</a>
				{/* <Icon icon={bxTrendingUp} /> */}

				<a href="#">
					<Icon icon={homeIcon} color={"white"} width="1.2rem" height="1.2rem" />
					<li>Home</li>
				</a>

				{/* <Icon icon={graphBar} /> */}
				<a href="#">
					<Icon icon={sharpLocalFireDepartment} color={"white"} width="1.2rem" height="1.2rem" />
					<li>Trending</li>
				</a>

				{/* <li><Icon icon={orderedList} /></li> */}
				<a href="#">
					<Icon icon={baselineSubscriptions} color={"white"} width="1.2rem" height="1.2rem" className="menu-icon" />
					<li>Subscriptions</li>
				</a>

				{/* <li><Icon icon={baselineSubscriptions} /></li> */}
				<a href="#">
					<Icon icon={baselineVideoLibrary} color={"white"} width="1.5rem" height="1.5rem" className="menu-icon" />
					<li>Library</li>
				</a>
			</ul>
		</div>
	);
};

NavBar.propTypes = {};

export default NavBar;
