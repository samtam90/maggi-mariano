import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Caserta",
  canonical: links.servizi["centrifugazione-fanghi"]["caserta"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Caserta",
  locationNames: { label: "Caserta", href: "caserta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["caserta"],
      name: "Caserta",
  }),
});
