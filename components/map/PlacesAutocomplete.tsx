import styles from "../map/Map.module.scss";
import usePlacesAutocomplete from 'use-places-autocomplete'
import { ListGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const PlacesAutocomplete = ({
    onAddressSelect,
  }: {
    onAddressSelect?: (address: string) => void;
  }) => {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: { componentRestrictions: { country: 'us' } },
      debounce: 300,
      cache: 86400,
    });
  
    const renderSuggestions = () => {
      return data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
          description,
        } = suggestion;
  
        return (
          <>
          <ListGroup className={styles.items}>
            <ListGroup.Item 
              className={styles.item}
              key={place_id}
              variant='light'
              action onClick={() => {
                setValue(description, false);
                clearSuggestions();
                onAddressSelect && onAddressSelect(description);
              }}>
                <strong>{main_text}</strong> <small>{secondary_text}</small>
            </ListGroup.Item>
          </ListGroup>
          </>
        );
      });
    };
  
    return (
      <div className={styles.autocompleteWrapper}>
        <label className={styles.searchLabel}>Search nearby</label>
        <div className={styles.inputBox}>
          <input
            value={value}
            className={styles.autocompleteInput}
            disabled={!ready}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Santa Clara University"
          />
          <Image 
              src={'https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/search-icon.png?alt=media&token=f1d3059f-3c05-4e5e-b781-427ea48a5acc'} 
              alt="search" 
              width={25}
              height={25}/>
        </div>
  
        {status === 'OK' && (
          <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
        )}
      </div>
    );
  };

export default PlacesAutocomplete;