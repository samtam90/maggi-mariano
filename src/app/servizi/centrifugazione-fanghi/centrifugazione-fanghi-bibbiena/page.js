import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Bibbiena",
  canonical: links.servizi["centrifugazione-fanghi"]["bibbiena"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Bibbiena",
  locationNames: { label: "Bibbiena", href: "bibbiena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
