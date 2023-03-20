import React, { useState } from 'react';
import { Grid } from '@reactronica/core';
import { Sampler } from '@reactronica/sampler';

type PianoRollProps = {};

type NoteSequence = boolean[][];

const PianoRoll: React.FC<PianoRollProps> = () => {
  const [sequence, setSequence] = useState<NoteSequence>([]);

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const newSequence = [...sequence];
    newSequence[rowIndex][colIndex] = !newSequence[rowIndex][colIndex];
    setSequence(newSequence);
  };

  return (
    <div>
      <Grid
        numRows={12}
        numCols={16}
        cellWidth={50}
        cellHeight={50}
        onCellClick={handleCellClick}
      >
        {sequence.map((row, rowIndex) => (
          row.map((isNoteOn, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                backgroundColor: isNoteOn ? '#ff8800' : '#dddddd',
                borderRadius: '50%',
              }}
            />
          ))
        ))}
      </Grid>
      <Sampler
        samples={{ C4: 'path/to/C4.wav' }}
        sequence={sequence}
        subdivision={1}
      />
    </div>
  );
};

export default PianoRoll;