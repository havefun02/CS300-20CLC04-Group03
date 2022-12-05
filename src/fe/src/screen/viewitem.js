export default function viewitem() {
    return(
        <><div className="container">
            <div className="img-container">
                <img className="image slides" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png"></img>
                <img className="image slides" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/00375837-849f-4f17-ba24-d201d27be49b/air-force-1-07-shoes-WrLlWX.png"></img>
                <img className="image slides" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-shoes-WrLlWX.png"></img>
                <img className="image slides" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-shoes-WrLlWX.png"></img>
                <div>
                    <button className="button-center" onclick="plusDivs(-1)">&#10094;</button>
                    <button onclick="plusDivs(1)">&#10095;</button>
                </div>
            </div>
            <div>
                <h1> Nike Air Force 1 </h1>
                <p> 2.300.000 VNĐ </p>
                <p> Description </p>
                <div className="box-container">
                    <div className="size-box">35</div>
                    <div className="size-box">36</div>
                    <div className="size-box">37</div>
                    <div className="size-box">38</div>
                    <div className="size-box">39</div>
                    <div className="size-box">40</div>
                    <div className="size-box">41</div>
                    <div className="size-box">42</div>
                    <div className="size-box">43</div>
                    <div className="size-box">44</div>
                </div>
                <br></br>
                <br></br>
                <div className="add-container">Add to cart</div>
            </div>
        </div><div className="vote-container">
                <span className="heading">User Rating</span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <hr style="border:3px solid #f1f1f1"></hr>

                <div className="row">
                    <div className="side">
                        <div>5 stars</div>
                    </div>
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-5"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="side">
                        <div>4 stars</div>
                    </div>
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-4"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="side">
                        <div>3 stars</div>
                    </div>
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-3"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="side">
                        <div>2 stars</div>
                    </div>
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-2"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="side">
                        <div>1 star</div>
                    </div>
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-1"></div>
                        </div>
                    </div>
                </div>
            </div><div>
                <br></br>
                <span className="vote-container heading">Review and Comment</span>
                <form className="feedback" action="">

                    <div className="form-group">
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i class="fa fa-pencil"></i></span>
                                <textarea className="form-control" id="review" rows="3"></textarea>

                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div><script>
                var slideIndex = 1;
                showDivs(slideIndex);

                function plusDivs(n) {showDivs(slideIndex += n)};


                function showDivs(n)
                {
                    var i;
                    var x = document.getElementsByClassName("slides");
                    if (n > x.length) {slideIndex = 1}
                    if (n < 1) {slideIndex = x.length}
                    for (i = 0; i < x.length; i++) {
                      x[i].style.display = "none";  
                    }
                    x[slideIndex-1].style.display = "block";  
                };
                
            </script></>
        
     
    );
    }

  

