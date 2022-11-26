import React, { useState } from 'react';

function Image() {
  const [firstTd, setFirstTd] = useState('transparent');
  const [color, setColor] = useState();
  const [allColorMain, setAllColor] = useState();
  function changeColor() {
    const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    setFirstTd(randomColor);
  }
  function resetColor() {
    setFirstTd('transparent');
    setAllColor('transparent');
  }
  function clickColor() {
    setFirstTd(color);
  }
  function allColor() {
    setAllColor(color);
  }
  return (
    <div>
      <input
        type='color'
        name='check-color'
        id='check-color'
        style={{ display: 'block', margin: '0 auto', marginTop: '100px' }}
        onChange={(e) => setColor(e.target.value)}
      ></input>
      <table>
        <tbody>
          <tr style={{ backgroundColor: allColorMain }}>
            <td
              style={{ backgroundColor: firstTd }}
              onMouseOver={changeColor}
              onMouseOut={resetColor}
              onClick={clickColor}
              onDoubleClick={allColor}
            >
              1
            </td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
          <tr>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
          </tr>
          <tr>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
          </tr>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
          </tr>
          <tr>
            <td>31</td>
            <td>32</td>
            <td>33</td>
            <td>34</td>
            <td>35</td>
            <td>36</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Image;
