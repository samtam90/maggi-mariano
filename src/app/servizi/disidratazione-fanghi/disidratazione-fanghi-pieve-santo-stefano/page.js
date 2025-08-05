import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pieve Santo Stefano",
  canonical: links.servizi["disidratazione-fanghi"]["pieve-santo-stefano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pieve Santo Stefano",
  locationNames: { label: "Pieve Santo Stefano", href: "pieve-santo-stefano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
