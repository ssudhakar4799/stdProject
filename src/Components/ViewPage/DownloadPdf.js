import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./Download.css"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import EmployeSideNav from '../EmployeSidNav/EmployeSidNav';
export default function DownloadPdf() {
  //---url data get the value---//
  const { item } = useParams();
  //---state---//
  const states = useSelector((state) => state);
  //---getting a timesheet data---//
  const state = useSelector((state) => state.auth.timesheet);
  //---particular data in fetch details show---//
  let fetchData = state.find((e) => e.astask == item);
  //---download this pdf file in current page---//
  let printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 30, 20);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
      ;
  }
  return (
    <>
      <EmployeSideNav />
      <section class="h-100 h-custom" >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-8 col-xl-6">
              <button className='btn bg-warning download' onClick={() => printDocument()}>Download</button>
              <div class="card border-top border-bottom border-3" id='divToPrint'>
                <div class="card-body p-5" >
                  <p class="lead fw-bold mb-5">{fetchData.astask}</p>
                  <div class="row">
                    <div class="col mb-3">
                      <p class="small text-muted mb-1">Date</p>
                      <p>{fetchData.date}</p>
                    </div>
                    <div class="col mb-3">
                      <p class="small text-muted mb-1">StartTime & EndTime</p>
                      <p>{fetchData.time}</p>
                    </div>
                  </div>

                  <div class="mx-n5 px-5 py-4 time">
                    <div class="row">
                      <div class="col-md-8 col-lg-9">
                        <p>Start Time</p>
                      </div>
                      <div class="col-md-4 col-lg-3">
                        <p>{fetchData.stTime}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8 col-lg-9">
                        <p class="mb-0">End Time</p>
                      </div>
                      <div class="col-md-4 col-lg-3">
                        <p class="mb-0">{fetchData.edTime}</p>
                      </div>
                    </div>
                  </div>

                  <div class="row my-4">
                    <div class="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                      <div class="col-md-8 col-lg-9">
                        <p class="mb-0">Time Durations</p>
                      </div>
                      <p class="lead fw-bold mb-0" >{fetchData.timeDurations}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
