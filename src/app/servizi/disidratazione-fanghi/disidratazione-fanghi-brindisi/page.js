import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Brindisi",
  canonical: links.servizi["disidratazione-fanghi"]["brindisi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Brindisi",
  locationNames: { label: "Brindisi", href: "brindisi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["brindisi"],
      name: "Brindisi",
  }),
});
