import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bibbiena",
  canonical: links.servizi["disidratazione-fanghi"]["bibbiena"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bibbiena",
  locationNames: { label: "Bibbiena", href: "bibbiena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
