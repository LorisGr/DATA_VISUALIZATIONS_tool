import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

function DataVisualization() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setError(null);

    axios.post('/upload', formData).then((response) => {
      setData(response.data);
      setLoading(false);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <FormControl type="file" onChange={handleFileUpload} />
        </FormGroup>
        <Button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Upload'}
        </Button>
      </Form>
      {error && (
        <p className="text-danger">Error: {error.message}</p>
      )}
      {data && (
        <div>
          {/* render visualizations using data */}
        </div>
      )}
    </div>
  );
}

export default DataVisualization;

