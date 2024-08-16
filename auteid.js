return doc ? ns ? doc.createElementNS(ns, tag) : doc.createElement(tag) : null;
