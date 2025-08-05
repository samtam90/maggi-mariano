import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Piacenza",
  canonical: links.servizi["centrifugazione-fanghi"]["piacenza"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Piacenza",
  locationNames: { label: "Piacenza", href: "piacenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["piacenza"],
      name: "Piacenza",
  }),
});
