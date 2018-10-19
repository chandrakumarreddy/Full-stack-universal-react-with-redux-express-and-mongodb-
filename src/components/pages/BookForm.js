import React from "react";
import {
	Panel,
	Well,
	FormControl,
	FormGroup,
	ControlLabel,
	Button
} from "react-bootstrap";

class BookForm extends React.Component {
	render() {
		return (
			<Well>
				<Panel>
					<form style={{ padding: "20px" }}>
						<FormGroup controlId="title">
							<ControlLabel>Title</ControlLabel>
							<FormControl
								type="text"
								placeholder="Title"
								ref="title"
							/>
						</FormGroup>
						<FormGroup controlId="description">
							<ControlLabel>Description</ControlLabel>
							<FormControl
								type="text"
								placeholder="Description"
								ref="desc"
							/>
						</FormGroup>
						<FormGroup controlId="price">
							<ControlLabel>Price</ControlLabel>
							<FormControl
								type="text"
								placeholder="Price"
								ref="price"
							/>
						</FormGroup>
						<Button bsStyle="primary">Save Book</Button>
					</form>
				</Panel>
			</Well>
		);
	}
}

export default BookForm;
