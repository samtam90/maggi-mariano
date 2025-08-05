import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Caserta",
  canonical: links.servizi["disidratazione-fanghi"]["caserta"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Caserta",
  locationNames: { label: "Caserta", href: "caserta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["caserta"],
      name: "Caserta",
  }),
});
