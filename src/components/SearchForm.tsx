// React
import React from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// CSS
import './SearchForm.scss';

// Constants
import { SEARCH_LABEL, ENTER_POKEMON, SEARCH } from '../constants/searchform';

const SearchForm: React.FC = () => {
  return (
    <div className="SearchForm">
      <Form>
        <Form.Group controlId="searchPokemonForm">
          <Form.Label>{SEARCH_LABEL}</Form.Label>
          <Form.Control type="text" placeholder={ENTER_POKEMON} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => {}}>
          {SEARCH}
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;
