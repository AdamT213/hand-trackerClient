import React  from "react"; 
import styled from "styled-components";

const Div = styled.div` 
background: #000000;
color: #0d7c57;
display: inline-block;
padding: 1%;
margin: 5%;
margin-bottom: 2%;
border-style: inset;
vertical-align: middle;
`;

const Tag = styled.a`
display: inline-block;
:link, :visited {
	color: black;
  }
  :hover {
	color: #7fff00; 
  }
`; 

const tags = props => { 
	return props.tags != undefined ? props.tags.map(tag => {
		return <Tag>{tag.tag_name}, </Tag>;
	}) 
		: <p>No tags yet</p>;
};

const date = props => { 
	return new Date(props.created_at).toDateString();
};

function  InProgressSessionName(props) {

	//shows just the basic info for a session still in progress
    
	return (
		<Div>
			<h3>Session in Progress</h3>
			<h3>Date: {date(props)}</h3>
			<h3>Tags</h3>
			<div>
				{tags(props)}
			</div>
		</Div>
	);
}

export default InProgressSessionName;