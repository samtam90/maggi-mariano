import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cortona",
  canonical: links.servizi["centrifugazione-fanghi"]["cortona"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cortona",
  locationNames: { label: "Cortona", href: "cortona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
