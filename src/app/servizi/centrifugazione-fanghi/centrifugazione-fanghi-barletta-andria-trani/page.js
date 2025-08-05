import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Barletta-Andria-Trani",
  canonical: links.servizi["centrifugazione-fanghi"]["barletta-andria-trani"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Barletta-Andria-Trani",
  locationNames: { label: "Barletta-Andria-Trani", href: "barletta-andria-trani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["barletta-andria-trani"],
      name: "Barletta-Andria-Trani",
  }),
});
