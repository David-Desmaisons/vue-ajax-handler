import { shallowMount } from "@vue/test-utils";
import AjaxHandler from "@/components/AjaxHandler.vue";

let get;
let data;
let wrapper;
const url = "testUrl";
const error = "errorMessage";

describe("AjaxHandler.vue", () => {
  beforeEach(() => {
    data = {
      fromServer: true
    };
  });

  describe("when ajax is ok", () => {
    beforeEach(() => {
      get = jest.fn(() => data);
      wrapper = createWrapper();
    });

    it("calls get on created", () => {
      expect(get).toHaveBeenCalledWith(url);
      expect(get.mock.calls.length).toBe(1);
    });

    it("set data to result", () => {
      expect(wrapper.vm.data).toBe(data);
    });

    it("set loading to false", () => {
      expect(wrapper.vm.loading).toBe(false);
    });

    it("set error to null", () => {
      expect(wrapper.vm.error).toBe(null);
    });

    describe("when calling load", () => {
      beforeEach(() => {
        wrapper.vm.load();
      });

      it("call get again", () => {
        expect(get.mock.calls.length).toBe(2);
      });
    });
  });

  describe("when ajax throw error", () => {
    beforeEach(() => {
      get = jest.fn(() => {
        throw error;
      });
      wrapper = createWrapper();
    });

    it("calls get on created", () => {
      expect(get).toHaveBeenCalledWith(url);
      expect(get.mock.calls.length).toBe(1);
    });

    it("set error to the error thrown", () => {
      expect(wrapper.vm.error).toBe(error);
    });

    it("set loading to false", () => {
      expect(wrapper.vm.loading).toBe(false);
    });

    it("set data to null", () => {
      expect(wrapper.vm.data).toBe(null);
    });

    describe("when calling load", () => {
      beforeEach(() => {
        wrapper.vm.load();
      });

      it("call get again", () => {
        expect(get.mock.calls.length).toBe(2);
      });
    });
  });

  describe("when ajax is not finished", () => {
    beforeEach(() => {
      get = jest.fn(() => new Promise(function() {}));
      wrapper = createWrapper();
    });

    it("calls get on created", () => {
      expect(get).toHaveBeenCalledWith(url);
      expect(get.mock.calls.length).toBe(1);
    });

    it("set data to null", () => {
      expect(wrapper.vm.data).toBe(null);
    });

    it("set error to null", () => {
      expect(wrapper.vm.error).toBe(null);
    });

    it("set loading to true", () => {
      expect(wrapper.vm.loading).toBe(true);
    });

    describe("when calling load", () => {
      beforeEach(() => {
        wrapper.vm.load();
      });

      it("does not call get again", () => {
        expect(get.mock.calls.length).toBe(1);
      });
    });
  });

  function createWrapper() {
    return shallowMount(AjaxHandler, {
      propsData: { url },
      provide: { get }
    });
  }
});
