import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Scheggia e Pascelupo",
  canonical: links.servizi["disidratazione-fanghi"]["scheggia-e-pascelupo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Scheggia e Pascelupo",
  locationNames: { label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
