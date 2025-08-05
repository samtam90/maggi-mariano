import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cuneo",
  canonical: links.servizi["centrifugazione-fanghi"]["cuneo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cuneo",
  locationNames: { label: "Cuneo", href: "cuneo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["cuneo"],
      name: "Cuneo",
  }),
});
