import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Scheggia e Pascelupo",
  canonical: links.servizi["centrifugazione-fanghi"]["scheggia-e-pascelupo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Scheggia e Pascelupo",
  locationNames: { label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
