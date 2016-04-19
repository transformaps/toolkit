# Index Your Project

One way to have your project website found more easily is to add your project to the **[Toronto Green Map](//torontogreenmap.com)**.

<form data-toggle="validator" role="form">
  <div class="form-group">
    <label for="inputName" class="control-label">Project Name</label>
    <input type="text" class="form-control" id="inputName" placeholder="Project Name" data-error="We require a project name" required>
  </div>
  <div class="form-group">
    <label for="inputName" class="control-label">Project Website</label>
    <input type="url" class="form-control" id="inputName" placeholder="https://www.projectwebsite.com" data-error="We require a valid website URL" required>
  </div>
  <div class="form-group has-feedback">
    <label for="inputTwitter" class="control-label">Project Twitter</label>
    <div class="input-group">
      <span class="input-group-addon">@</span>
      <input type="text" pattern="^[_A-z0-9]{1,}$" maxlength="15" class="form-control" id="inputTwitter" placeholder="Project_Twitter">
    </div><!---_ --->
  </div>
  <div class="form-group">
    <label for="inputEmail" class="control-label">Contact Email</label>
    <input type="email" class="form-control" id="inputEmail" placeholder="email@project-site.com" data-error="We require a valid email address" required>
    <div class="help-block with-errors"></div>
  </div>

  <div class="form-group">
    <div class="checkbox">
      <label>
        <input type="checkbox" id="terms" data-error="Please " required>
        I understand that I am submitting information that will be stored about my project.
      </label>
      <div class="help-block with-errors"></div>
    </div>
  </div>
  <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
