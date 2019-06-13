import React, { Component } from 'react';
import './SearchModal.css';

import { Modal, Nav, Form } from 'react-bootstrap';
import SearchImg from './imgSearchModal/search.svg';

export default class SearchModal extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			lgShow: false
		};
	}

	render() {
		let lgClose = () => this.setState({ lgShow: false });
		return (
			<React.Fragment>
				<Nav.Link className="NavigationLinks hoverSearchIcon" onClick={() => this.setState({ lgShow: true })}>
					<img src={SearchImg} className="searchIcon hoverSearchIcon" alt="search" />
				</Nav.Link>

				<Modal
					className="borderRadiusInput ModalTopMargin"
					size="lg"
					show={this.state.lgShow}
					onHide={lgClose}
					aria-labelledby="example-modal-sizes-title-lg"
				>
					<Modal.Body className="p-0 borderRadiusInput">
						<Form.Control
							className="text-center SearchModalInput borderRadiusInput"
							size="lg"
							type="search"
							placeholder="Unesite Vašu pretragu..."
						/>
					</Modal.Body>
				</Modal>
			</React.Fragment>
		);
	}
}
// render(<SearchModal />);
