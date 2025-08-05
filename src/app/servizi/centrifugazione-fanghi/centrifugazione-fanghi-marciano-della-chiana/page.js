import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Marciano della Chiana",
  canonical: links.servizi["centrifugazione-fanghi"]["marciano-della-chiana"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Marciano della Chiana",
  locationNames: { label: "Marciano della Chiana", href: "marciano-della-chiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
