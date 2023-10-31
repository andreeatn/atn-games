import { useForm, FieldValues } from "react-hook-form";

function SupportForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted, isDirty },
    reset,
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          placeholder="FirstName LastName"
          {...register("name", { required: true, minLength: 3, maxLength: 50 })}
        />
        {errors?.name?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
        {(errors?.name?.type === "minLength" ||
          errors?.name?.type === "maxLength") && (
          <p className="text-danger">
            Name must contain between 3-50 characters
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="example@domain"
          {...register("email", { required: true, maxLength: 50 })}
        />
        {errors?.email?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="inputMessage" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="inputMessage"
          rows={3}
          placeholder="Describe your issue"
          {...register("message", { required: true, maxLength: 3000 })}
        ></textarea>
        {errors?.message?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
        {errors?.message?.type === "maxLength" && (
          <p className="text-danger">
            Message cannot contain more that 3000 characters.
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="inputFileMultiple" className="form-label">
          Upload screenshots
        </label>
        <input
          className="form-control"
          type="file"
          id="inputFileMultiple"
          multiple
        />
      </div>
      <div className="d-flex flex-row">
        <button type="submit" disabled={!isValid} className="btn btn-primary ">
          Send
        </button>
        {isSubmitted && !isDirty && (
          <p className="mx-3 my-2">Message was sent!</p>
        )}
      </div>
    </form>
  );
}

export default SupportForm;
