import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Chitignano",
  canonical: links.servizi["disidratazione-fanghi"]["chitignano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Chitignano",
  locationNames: { label: "Chitignano", href: "chitignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
