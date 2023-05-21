import React from 'react'
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

function Nav() {
  return (
    <>
    <nav class="navbar navbar-expand navbar-dark sticky-top">
    <div class="container-fluid">
        <OnlinePredictionIcon sx={{ fontSize: 40 }}/>
        <a href="/" class="navbar-brand">
            <h4>Network Analysis</h4>
        </a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="/" class="nav-item nav-link active"><HomeIcon/>Home</a>
                <a href="/" class="nav-item nav-link active"><InfoIcon/>About Project</a>
                <a href="/" class="nav-item nav-link active" tabindex="-1"><ReportProblemIcon/>Reports</a>
            </div>
            
        </div>
    </div>
</nav>
</>
  )
}

export default Nav