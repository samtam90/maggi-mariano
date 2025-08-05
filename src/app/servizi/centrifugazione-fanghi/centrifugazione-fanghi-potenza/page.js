import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Potenza",
  canonical: links.servizi["centrifugazione-fanghi"]["potenza"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Potenza",
  locationNames: { label: "Potenza", href: "potenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["potenza"],
      name: "Potenza",
  }),
});
