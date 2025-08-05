import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Castel Viscardo",
  canonical: links.servizi["centrifugazione-fanghi"]["castel-viscardo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Castel Viscardo",
  locationNames: { label: "Castel Viscardo", href: "castel-viscardo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
