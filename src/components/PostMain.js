import React from "react";
import "./Post.css";

const PostMain = () => {
  return (
    <div className="container mt-2 p-5 pt-0 justify-content-center">
      <div className="row pt-2 border-bottom pb-2 d-flex justify-content-center ">
        <div className="col-9 d-flex justify-content-center">
          <div className="row border text-light rounded border-info w-75 p-4 form-box-shadow">
            <div className="col-12 text-start pt-2 text-shadow-text">
              <h2 className="text-shadow-text">Add A New Post</h2>
            </div>
            <div className="col-12 text-start">
              <form>
                <div className="mb-3">
                  <label for="exampleInputPostTitle" className="form-label">
                    Post Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPostTitle"
                    placeholder="Enter Title here..."
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputAuther" className="form-label">
                    Auther
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputAuther"
                    placeholder="Enter Auther name here..."
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputContent" className="form-label">
                    Content
                  </label>
                  <textarea
                    rows={5}
                    type="text"
                    className="form-control"
                    id="exampleInputContent"
                    placeholder="Enter content here..."
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your Details with anyone else.
                  </div>
                </div>

                <div className="text-center">
                  <a
                    type="submit"
                    style={{ "--clr": "#1e9bff" }}
                    className="a-btn"
                  >
                    <span>Save Post</span> <i></i>
                  </a>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button className="changing-btn">Save Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-2 d-flex justify-content-center">
        <div className="col-7 text-start pt-2">
          <h2>Posts</h2>
        </div>
      </div>

      <div className="row pt-2 pb-2 d-flex justify-content-center">
        <div className="col-9 d-flex justify-content-center">
          <div
            className="row single-post form-box-shadow border text-light rounded border-info w-75 pt-3 pb-3"
            role={"button"}
          >
            <div className="col-12 text-start pt-2">
              <h3>Learning Redux/Tool-Kit.</h3>
            </div>
            <div className="col-12 text-start">
              <h5>
                I have heard good things ! #Easy to learn. Usage- Mainly for
                state management
              </h5>
            </div>
            <div className="col-12 text-start pt-0">
              <h6 className="text-muted">
                -by Unknown Auther <i>10 minutes ago</i>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMain;
