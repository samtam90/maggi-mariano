import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Lucignano",
  canonical: links.servizi["disidratazione-fanghi"]["lucignano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Lucignano",
  locationNames: { label: "Lucignano", href: "lucignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
