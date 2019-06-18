import React from 'react';
import { render, fireEvent } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';

import PlayerList from './PlayerList';
// show no players available if playerl ist is empty or not passed

describe('<Player />', () => {
    it('should show "No Players" if none passed', () => {
        const { getByText } = render(<PlayerList />)

        getByText(/no players to list/i);
    })
})