import { spy } from "sinon";
import { REQUEST_IMAGEINFO } from "../../actions/images";
import { mapDispatch } from ".";

describe("pages > ImageInfo", () => {
  describe("mapDispatch", () => {
    it("returns loadImageInfo method", () => {
      const dispatch = spy();

      const result = mapDispatch(dispatch);

      expect(result).toHaveProperty("loadImageInfo");

      result.loadImageInfo();

      expect(dispatch.calledOnce).toBe(true);
      expect(dispatch.calledWith({ type: REQUEST_IMAGEINFO })).toBe(true);
    });
  });
});
