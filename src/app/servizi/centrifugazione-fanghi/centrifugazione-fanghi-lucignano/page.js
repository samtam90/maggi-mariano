import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Lucignano",
  canonical: links.servizi["centrifugazione-fanghi"]["lucignano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Lucignano",
  locationNames: { label: "Lucignano", href: "lucignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
