import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Trento",
  canonical: links.servizi["centrifugazione-fanghi"]["trento"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Trento",
  locationNames: { label: "Trento", href: "trento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["trento"],
      name: "Trento",
  }),
});
