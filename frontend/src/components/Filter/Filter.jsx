import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Filter.scss';


function Filter({ onFilterChange }) {
    const [species, setSpecies] = useState('');
    const [sex, setSex] = useState('');
    const [size, setSize] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [state, setState] = useState('');

    const handleFilterChange = (filterType, value) => {
        onFilterChange(filterType, value);

        // Update the local filter state
        switch (filterType) {
            case 'species':
                setSpecies(value);
                break;
            case 'sex':
                setSex(value);
                break;
            case 'size':
                setSize(value);
                break;
            case 'age':
                setAge(value);
                break;
            case 'breed':
                setBreed(value);
                break;
            case 'state':
                setState(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="filter-menu">
            <DropdownButton
                id="dropdown-species"
                title={species || 'Select Species'}
                variant="secondary"
                onSelect={(value) => handleFilterChange('species', value)}
            >
                <Dropdown.Item eventKey="">No Preference</Dropdown.Item> 
                {['Dog', 'Cat'].map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                        {option}
                    </Dropdown.Item>
                ))}
            </DropdownButton>

            <DropdownButton
                id="dropdown-sex"
                title={sex || 'Select Sex'}
                variant="secondary"
                onSelect={(value) => handleFilterChange('sex', value)}
            >
                <Dropdown.Item eventKey="">No Preference</Dropdown.Item>
                {['Male', 'Female'].map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                        {option}
                    </Dropdown.Item>
                ))}
            </DropdownButton>

            <DropdownButton
                id="dropdown-size"
                title={size || 'Select Size'}
                variant="secondary"
                onSelect={(value) => handleFilterChange('size', value)}
            >
                <Dropdown.Item eventKey="">No Preference</Dropdown.Item>
                {['Small', 'Medium', 'Large'].map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                        {option}
                    </Dropdown.Item>
                ))}
            </DropdownButton>

            <DropdownButton
                id="dropdown-age"
                title={age || 'Select Age'}
                variant="secondary"
                onSelect={(value) => handleFilterChange('age', value)}
            >
                <Dropdown.Item eventKey="">No Preference</Dropdown.Item>
                {['Baby', 'Young', 'Adult', 'Senior'].map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                        {option}
                    </Dropdown.Item>
                ))}
            </DropdownButton>

            <DropdownButton
                id="dropdown-breed"
                title={breed || 'Select Breed'}
                variant="secondary"
                onSelect={(value) => handleFilterChange('breed', value)}
            >
                <Dropdown.Item eventKey="">No Preference</Dropdown.Item> 
                {['Abyssinian', 'Akita', 'American Bulldog', 'American Shorthair', 'American Staffordshire Terrier', 'Anatolian Shepherd', 'Australian Cattle Dog/Blue Heeler', 'Australian Kelpie', 'Australian Shepherd', 'Australian Terrier', 'Basset Hound', 'Basenji', 'Belgian Shepherd Malinois', 'Black Mouth Cur', 'Bombay', 'Boykin Spaniel', 'Border Collie', 'Brittany', 'Briard', 'Cairn Terrier', 'Calico', 'Cardigan Welsh Corgi', 'Chihuahua', 'Chinese Shar-Pei', 'Chow Chow', 'Cockapoo', 'Collie', 'Coonhound', 'Corgi', 'Coyote', 'Dalmatian', 'Dachshund', 'Dilute Calico', 'Dilute Tortoiseshell', 'Doberman Pinscher', 'Domestic Long Hair', 'Domestic Medium Hair', 'Domestic Short Hair', 'Dogo Argentino', 'Dutch Shepherd', 'Feist', 'Foxhound', 'French Bulldog', 'French Brittany', 'German Shepherd Dog', 'German Shorthaired Pointer', 'Golden Retriever', 'Greyhound', 'Hound', 'Husky', 'Italian Greyhound', 'Labrador Retriever', 'Maine Coon', 'Manchester Terrier', 'Maltese', 'Miniature Pinscher', 'Maine Coon', 'Mastiff', 'Norfolk Terrier', 'Poodle (Miniature)', 'Poodle (Standard)', 'Poodle (Toy)', 'Pointer', 'Plott Hound', 'Pit Bull Terrier', 'Pug', 'Rat Terrier', 'Red Heeler', 'Retriever', 'Rhodesian Ridgeback', 'Ragdoll', 'Shiba Inu', 'Shih Tzu', 'Snowshoe', 'Staffordshire Bull Terrier', 'Tabby', 'Terrier', 'Tortoiseshell', 'Toy Fox Terrier', 'Whippet', 'Wirehaired Fox Terrier', 'Yellow Labrador Retriever', 'Yorkshire Terrier Yorkie'].map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                        {option}
                    </Dropdown.Item>
                ))}
            </DropdownButton>

            <DropdownButton
                id="dropdown-state"
                title={state || 'Select State'}
                variant="secondary"
                onSelect={(value) => handleFilterChange('state', value)}
            >
                <Dropdown.Item eventKey="">No Preference</Dropdown.Item>
                {['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
                'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
                'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
                'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 
                'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'].map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                        {option}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
}

export default Filter;
