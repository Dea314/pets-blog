const NewComment = () => {
  return (
    <div>
      <form action="" method="POST">
        <div>
          <input type="text" name="name" value="Tell us your name!" />
        </div>
        <div>
          <textarea name="comment">Show them some love!</textarea>
        </div>
        <div>
          <input id="yes" type="checkbox" name="love" value="yes" required />
          <label for="yes">I love animals!</label>
        </div>
        <div>
          <input type="submit" value="Make comment" />
        </div>
      </form>
    </div>
  );
};

export default NewComment;
