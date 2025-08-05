import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Taranto",
  canonical: links.servizi["centrifugazione-fanghi"]["taranto"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Taranto",
  locationNames: { label: "Taranto", href: "taranto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["taranto"],
      name: "Taranto",
  }),
});
