<script>
  $(document).ready(function() {
        $('div.input-error').hide();
        $('div.input-success').hide();
        $('#submitButton').click(function() {
              if ($('#password_input').val().length > 6) {
                $('div.input-success').show(); <
